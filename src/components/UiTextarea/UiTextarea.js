import { generateHash } from '@/utils/helpers';
import testable from '@/mixins/testable';

import $style from './UiTextarea.scss';

export default {
  name: 'UiTextarea',
  mixins: [
    testable,
  ],
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
    this.uniqueId = this.id || `input-${generateHash()}`;
  },
  methods: {
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
          [$style.isDisabled]: this.disabled,
          [$style.hasLabel]: this.label,
        },
      }, childNodes);
    },

    genLabel() {
      if (!this.label) return null;

      return this.$createElement('label', {
        class: $style.label,
        attrs: {
          for: this.uniqueId,
        },
      }, [this.label]);
    },

    genTextarea() {
      return this.$createElement('textarea', {
        class: $style.textarea,
        attrs: {
          id: this.uniqueId,
          name: this.name,
          required: this.required,
          disabled: this.disabled,
        },
        on: {
          input: this.inputHandler,
          change: this.changeHandler,
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
