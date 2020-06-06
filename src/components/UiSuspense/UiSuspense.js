import { getSlot } from '@/utils/helpers';
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

    getDefaultSlot() {
      const defaultSlot = getSlot(this);

      if (defaultSlot) return defaultSlot;

      return this.$createElement('span', 'Success');
    },

    getErrorSlot() {
      const errorSlot = getSlot(this, 'error');

      if (errorSlot) return errorSlot;

      return this.$createElement('span', 'Error');
    },

    getFallbackSlot() {
      const fallbackSlot = getSlot(this, 'fallback');

      if (fallbackSlot) return fallbackSlot;

      return this.$createElement('span', 'No data');
    },

    getPendingSlot() {
      const preloaderSlot = getSlot(this, 'preloader');

      if (preloaderSlot) return preloaderSlot;

      return this.$createElement(UiPreloader, {
        props: {
          fullBlock: true,
        },
      });
    },

    genContent() {
      switch (this.localState) {
        case STATE_TYPES.SUCCESS:
          return this.getDefaultSlot();

        case STATE_TYPES.FAIL:
          return this.getErrorSlot();

        case STATE_TYPES.EMPTY:
          return this.getFallbackSlot();

        case STATE_TYPES.PENDING:
        default:
          return this.getPendingSlot();
      }
    },
  },
  render() {
    return this.genRoot([
      this.genContent(),
    ]);
  },
};
