import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock/lib/bodyScrollLock';
import { scrollTo } from '@/utils/helpers';
import { registrableInject } from '@/mixins/registrable';
import { factoryToggleable } from '@/mixins/toggleable';
import styles from './UiOverlay.scss';

const registrableInjector = registrableInject('appContainer', 'UiOverlay', 'UiApp');
const toggleable = factoryToggleable();

export default {
  name: 'UiOverlay',
  mixins: [
    registrableInjector,
    toggleable,
  ],
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classesRoot() {
      return {
        [styles.root]: true,
        [styles.isActive]: this.active,
        [styles.isOpened]: this.opened,
      };
    },
  },
  watch: {
    opened(payload) {
      this.toggleScroll(payload);
    },
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
        scrollTo(this.$el, 0, 0);
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
      return this.$createElement('div', {
        class: this.classesRoot,
        on: { ...this.$listeners },
      }, childNodes);
    },

    genDefaultSlot() {
      const defaultSlot = this.$scopedSlots.default;

      if (!defaultSlot) return null;

      return defaultSlot();
    },
  },
  render() {
    return this.genRoot([
      this.genDefaultSlot(),
    ]);
  },
};
