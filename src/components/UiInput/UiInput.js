import { generateHash, propValidator } from '@/utils/helpers';
import testable from '@/mixins/testable';

import UiIcon from '../UiIcon';

import $style from './UiInput.scss';

const typeValidator = propValidator('type', ['text', 'password']);

export default {
  name: 'UiInput',
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
    type: {
      type: String,
      default: 'text',
      ...typeValidator,
    },
    value: {
      type: [String, Number],
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
    iconBefore: {
      type: String,
      default: null,
    },
  },
  data: () => ({
    uniqueId: null,
    focused: false,
  }),
  mounted() {
    this.uniqueId = this.id || `input-${generateHash()}`;
  },
  methods: {
    handleFocus(event) {
      if (this.disabled) return;

      this.focused = true;
      this.$emit('focus', event);
    },

    handleBlur(event) {
      if (this.disabled) return;

      this.focused = false;
      this.$emit('blur', event);
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
          [$style.root]: true,
          [$style.hasIconBefore]: this.iconBefore,
          [$style.hasLabel]: this.label,
          [$style.isFilled]: this.value,
          [$style.isFocused]: this.focused,
          [$style.isDisabled]: this.disabled,
        },
      }, childNodes);
    },

    genLabel() {
      if (!this.label) return null;

      return this.$createElement('label', {
        class: {
          [$style.label]: true,
          [$style.labelActive]: this.value || this.focused,
        },
        attrs: {
          for: this.uniqueId,
        },
      }, [this.label]);
    },

    genContainer(childNodes = []) {
      return this.$createElement('div', {
        class: $style.container,
      }, childNodes);
    },

    genIconBefore() {
      if (!this.iconBefore) return null;

      const icon = this.$createElement(UiIcon, {
        props: { name: this.iconBefore },
      });

      return this.$createElement('label', {
        class: $style.iconBefore,
        attrs: {
          for: this.uniqueId,
        },
      }, [icon]);
    },

    genInput() {
      return this.$createElement('input', {
        class: $style.input,
        attrs: {
          id: this.uniqueId,
          type: this.type,
          value: this.value,
          name: this.name,
          required: this.required,
          disabled: this.disabled,
        },
        on: {
          ...this.$listeners,
          focus: this.handleFocus,
          blur: this.handleBlur,
          input: this.handleInput,
          change: this.handleChange,
        },
      });
    },

    genButtonClear() {
      const icon = this.$createElement(UiIcon, {
        props: { name: 'cross' },
      });

      return this.$createElement('button', {
        //
      }, [icon]);
    },
  },
  render() {
    return this.genRoot([
      this.genContainer([
        this.genIconBefore(),
        this.genLabel(),
        this.genInput(),
        this.genButtonClear(),
      ]),
    ]);
  },
};
