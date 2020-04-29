import { InvalidOptionValueError } from '@/utils/errors';
import { isNumber } from '@/utils/inspect';

/**
 * Фабрика миксина для переключаемых компонентов
 *
 * @TODO: Remove delay
 *
 * @param {String} prop
 * @param {String} event
 * @param {Number | null} delay
 * @return {Object}
 */
export const factoryToggleable = (prop = 'opened', event = 'toggle', delay = null) => {
  if (isNumber(delay) && delay <= 0) {
    throw new InvalidOptionValueError('delay');
  }

  function open() {
    this.isClosed = false;
    this.isOpened = true;

    this.toggle();
  }

  /**
   * @returns {Promise<undefined>}
   */
  function openWithDelay() {
    this.isClosed = false;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.isOpened = true;
        this.toggle();

        resolve();
      }, delay);
    });
  }

  function close() {
    this.isClosed = true;
    this.isOpened = false;

    this.toggle();
  }

  /**
   * @returns {Promise<undefined>}
   */
  function closeWithDelay() {
    this.isOpened = false;

    return new Promise((resolve) => {
      setTimeout(() => {
        this.isClosed = true;
        this.toggle();

        resolve();
      }, delay);
    });
  }

  return {
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
        open.call(this);
      } else {
        close.call(this);
      }
    },
    methods: {
      open: delay ? openWithDelay : open,
      close: delay ? closeWithDelay : close,
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
  };
};
