<script>
  import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock/lib/bodyScrollLock.es6';
  import { inject as RegistrableInject } from '@/mixins/registrable';
  // import Toggleable from '@/mixins/toggleable';

  export default {
    name: 'UiOverlay',
    mixins: [
      RegistrableInject('appContainer', 'UiOverlay', 'UiApp'),
      // Toggleable,
    ],
    computed: {
      classesRoot() {
        return {
          [this.$style.root]: true,
          [this.$style.isOpened]: this.opened,
        };
      },
    },
    watch: {
      opened: 'toggleScroll',
    },
    mounted() {
      if (this.appContainer) {
        this.appContainer.register(this.$el, 'modals');
      }

      this.toggleScroll(this.opened);
    },
    beforeDestroy() {
      this.unlockScroll();

      if (this.appContainer) {
        this.appContainer.unregister(this.$el, 'modals');
      }
    },
    methods: {
      toggleScroll(opened) {
        if (opened) {
          this.$el.scrollTo(0, 0);
        }
        if (opened) {
          this.lockScroll();
        } else {
          this.unlockScroll();
        }
      },
      lockScroll() {
        disableBodyScroll(this.$el);
      },
      unlockScroll() {
        enableBodyScroll(this.$el);
      },
      genRoot(childNodes = []) {
        this.$createElement('div', {
          class: this.classes,
        }, childNodes);
      },
    },
    render() {
      return this.genRoot([
        this.$slots.default,
      ]);
    },
  };
</script>

<style lang="scss" module>
  .root {
    background-color: rgba($colorBlack, .5);
    min-height: 100vh;
    opacity: 0;
    pointer-events: none;
    transition: $transition;
    overflow-y: auto;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;

    &.isOpened {
      opacity: 1;
      pointer-events: all;
    }
  }
</style>
