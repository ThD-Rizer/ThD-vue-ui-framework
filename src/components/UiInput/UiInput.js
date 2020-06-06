import { generateHash, propValidator } from '@/utils/helpers';
import UiIcon from '@/components/UiIcon';
import styles from './UiInput.scss';

const typeValidator = propValidator('type', ['text', 'password']);

export default {
  name: 'UiInput',
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
    readOnly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: null,
    },
    clearable: {
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
    localValue: null,
  }),

  computed: {
    nodeInput() {
      return this.$refs.input;
    },
  },

  watch: {
    value: {
      handler(payload) {
        this.localValue = payload;
      },
      immediate: true,
    },
  },

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

    clear() {
      this.localValue = '';
      this.nodeInput.value = '';
      this.$emit('input', '');
    },

    genRoot(childNodes = []) {
      return this.$createElement('div', {
        class: {
          [styles.root]: true,
          [styles.hasIconBefore]: this.iconBefore,
          [styles.hasLabel]: this.label,
          [styles.isFilled]: this.localValue,
          [styles.isFocused]: this.focused,
          [styles.isReadOnly]: this.readOnly,
          [styles.isDisabled]: this.disabled,
        },
      }, childNodes);
    },

    genLabel() {
      if (!this.label) return null;

      return this.$createElement('label', {
        class: {
          [styles.label]: true,
          [styles.labelActive]: this.localValue || this.focused,
        },
        attrs: {
          for: this.uniqueId,
        },
      }, [this.label]);
    },

    genContainer(childNodes = []) {
      return this.$createElement('div', {
        class: styles.container,
      }, childNodes);
    },

    genIconBefore() {
      if (!this.iconBefore) return null;

      const icon = this.$createElement(UiIcon, {
        props: { name: this.iconBefore },
      });

      return this.$createElement('label', {
        class: styles.iconBefore,
        attrs: {
          for: this.uniqueId,
        },
      }, [icon]);
    },

    genInput() {
      return this.$createElement('input', {
        class: styles.input,
        domProps: {
          value: this.localValue,
          required: this.required,
          readonly: this.readOnly,
          disabled: this.disabled,
        },
        attrs: {
          id: this.uniqueId,
          type: this.type,
          name: this.name,
          placeholder: this.placeholder,
        },
        on: {
          ...this.$listeners,
          focus: this.handleFocus,
          blur: this.handleBlur,
          input: this.handleInput,
          change: this.handleChange,
        },
        ref: 'input',
      });
    },

    genButtonClear() {
      if (!this.localValue) return null;

      const icon = this.$createElement(UiIcon, {
        props: { name: 'cross' },
      });

      return this.$createElement('button', {
        class: styles.buttonClear,
        on: {
          click: this.clear,
        },
      }, [icon]);
    },
  },

  render() {
    return this.genRoot([
      this.genContainer([
        this.genIconBefore(),
        this.genLabel(),
        this.genInput(),
        this.clearable && this.genButtonClear(),
      ]),
    ]);
  },
};
