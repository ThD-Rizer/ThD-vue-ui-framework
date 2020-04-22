import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock/lib/bodyScrollLock';
import { inject as RegistrableInject } from '@/mixins/registrable';
// import Toggleable from '@/mixins/toggleable';

import styles from './UiOverlay.scss';

export default {
  name: 'UiOverlay',
  mixins: [
    RegistrableInject('appContainer', 'UiOverlay', 'UiApp'),
    // Toggleable,
  ],
  computed: {
    classesRoot() {
      return {
        [styles.root]: true,
        [styles.isOpened]: this.opened,
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
