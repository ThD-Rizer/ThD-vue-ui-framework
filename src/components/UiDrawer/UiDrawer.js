import { registrableInject } from '@/mixins/registrable';
import { factoryToggleable } from '@/mixins/toggleable';
import swipeable from '@/mixins/swipeable';
import UiOverlay from '@/components/UiOverlay';
import styles from './UiDrawer.scss';

const registrableInjector = registrableInject('appContainer', 'UiDrawer', 'UiApp');
const toggleable = factoryToggleable();

export default {
  name: 'UiDrawer',
  mixins: [
    registrableInjector,
    toggleable,
    swipeable,
  ],
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootClasses() {
      const { right } = this;

      return {
        [styles.root]: true,
        [styles.isLeft]: !right,
        [styles.isRight]: right,
        [styles.isActive]: this.active,
        [styles.isOpened]: this.opened,
      };
    },
  },
  watch: {
    swiped(value) {
      if (
        (value === 'left' && !this.right)
        || (value === 'right' && this.right)
      ) {
        this.closeDrawer();
      }
    },
  },
  mounted() {
    if (this.appContainer) {
      this.appContainer.register(this.$el, 'modals');
    }
  },
  beforeDestroy() {
    if (this.appContainer) {
      this.appContainer.unregister(this.$el, 'modals');
    }
  },
  methods: {
    closeDrawer() {
      this.close();
    },

    genRoot(childNodes = []) {
      return this.$createElement('div', {
        class: this.rootClasses,
      }, childNodes);
    },

    genOverlay(childNodes = []) {
      return this.$createElement(UiOverlay, {
        class: styles.overlay,
        props: {
          active: this.opened || this.active,
        },
        on: {
          click: this.closeDrawer,
        },
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
      this.genOverlay(),
    ]);
  },
};
