import { isBoolean } from '@/utils/inspect';

/**
 * Фабрика миксина для переключаемых компонентов
 *
 * @param {String} prop
 * @param {String} event
 * @returns {Object}
 */
export const factoryToggleable = (prop = 'opened', event = 'toggle') => ({
  model: {
    prop,
    event,
  },
  props: {
    [prop]: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    toggleableState: false,
  }),
  watch: {
    [prop](payload) {
      this.toggle(payload);
    },
  },
  beforeMount() {
    this.toggleableState = this[prop];
  },
  methods: {
    toggle(state = null) {
      if (isBoolean(state)) {
        this.toggleableState = state;
      } else {
        this.toggleableState = !this.toggleableState;
      }
      this.$emit(event, this.toggleableState);
    },
  },
});
