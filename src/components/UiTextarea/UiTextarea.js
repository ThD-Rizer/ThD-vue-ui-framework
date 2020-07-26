import { generateHash } from '@/utils/helpers';
import styles from './UiTextarea.scss';

export default {
  name: 'UiTextarea',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    id: {
      type: [String, Number],
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    uniqueId: null,
  }),
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.uniqueId = this.id || `input-${generateHash()}`;
    },

    handleInput(event) {
      if (this.disabled) return;

      this.$emit('input', event.target.value);
    },

    handleChange(event) {
      if (this.disabled) return;

      this.$emit('change', event.target.value);
    },

    genRoot(childNodes = []) {
      return this.$createElement('div', {
        class: {
          [styles.isDisabled]: this.disabled,
          [styles.hasLabel]: this.label,
        },
      }, childNodes);
    },

    genLabel() {
      if (!this.label) return null;

      return this.$createElement('label', {
        class: styles.label,
        attrs: {
          for: this.uniqueId,
        },
      }, [this.label]);
    },

    genTextarea() {
      return this.$createElement('textarea', {
        class: styles.textarea,
        attrs: {
          id: this.uniqueId,
          name: this.name,
          required: this.required,
          disabled: this.disabled,
        },
        on: {
          input: this.handleInput,
          change: this.handleChange,
        },
      }, [this.value]);
    },
  },
  render() {
    return this.genRoot([
      this.genLabel(),
      this.genTextarea(),
    ]);
  },
};
