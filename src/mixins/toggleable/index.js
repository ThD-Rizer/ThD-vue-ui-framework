/**
 * Фабрика миксина для переключаемых компонентов
 *
 * @param {String} prop
 * @param {String} event
 * @return {Object}
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
    isOpened: false,
    isClosed: true,
  }),
  watch: {
    [prop](payload) {
      this.handleModelChange(payload);
    },
  },
  beforeMount() {
    if (this[prop]) {
      this.open();
    } else {
      this.close();
    }
  },
  methods: {
    open() {
      this.isClosed = false;
      this.isOpened = true;

      this.toggle();
    },
    close() {
      this.isClosed = true;
      this.isOpened = false;

      this.toggle();
    },
    toggle() {
      this.$emit(event, this.isOpened);
    },
    handleModelChange(value) {
      if (value) {
        this.open();
      } else {
        this.close();
      }
    },
  },
});
