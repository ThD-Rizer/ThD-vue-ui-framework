import UiPreloader from '@/components/UiPreloader';
import { STATE_TYPES } from './constants';

export default {
  name: 'UiSuspense',
  props: {
    state: {
      type: String,
      default: STATE_TYPES.PENDING,
    },
    transitionName: {
      type: String,
      default: 'fade',
    },
    transitionMode: {
      type: String,
      default: 'out-in',
    },
  },
  computed: {
    localState() {
      return this.state;
    },
  },
  methods: {
    genRoot(childNodes = []) {
      return this.$createElement('transition', {
        props: {
          name: this.transitionName,
          mode: this.transitionMode,
        },
      }, childNodes);
    },

    genContent() {
      switch (this.localState) {
        case STATE_TYPES.SUCCESS:
          return this.genDefaultSlot();

        case STATE_TYPES.FAIL:
          return this.genErrorSlot();

        case STATE_TYPES.EMPTY:
          return this.genFallbackSlot();

        case STATE_TYPES.PENDING:
        default:
          return this.genPendingSlot();
      }
    },

    genDefaultSlot() {
      const defaultSlot = this.$scopedSlots.default;
      const defaultElement = this.$createElement('span', 'Success');

      if (!defaultSlot) return defaultElement;

      return defaultSlot();
    },

    genErrorSlot() {
      const errorSlot = this.$scopedSlots.error;
      const defaultElement = this.$createElement('span', 'Error');

      if (!errorSlot) return defaultElement;

      return errorSlot();
    },

    genFallbackSlot() {
      const fallbackSlot = this.$scopedSlots.fallback;
      const defaultElement = this.$createElement('span', 'No data');

      if (!fallbackSlot) return defaultElement;

      return fallbackSlot();
    },

    genPendingSlot() {
      const preloaderSlot = this.$scopedSlots.preloader;
      const defaultElement = this.$createElement(UiPreloader, {
        props: {
          fullBlock: true,
        },
      });

      if (!preloaderSlot) return defaultElement;

      return preloaderSlot();
    },
  },
  render() {
    return this.genRoot([
      this.genContent(),
    ]);
  },
};
