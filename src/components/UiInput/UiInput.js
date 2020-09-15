import { generateHash } from '@/utils';
import { propValidator } from '@/utils/helpers';
import { factoryStylable } from '@/mixins/stylable';
import UiIcon from '@/components/UiIcon';
import defaultStyles from './UiInput.scss';

export const stylable = factoryStylable({
  defaultStyles,
});

const typeValidator = propValidator('type', [
  'text',
  'password',
]);
const textAlignValidator = propValidator('textAlign', [
  'left',
  'center',
  'right',
  'justify',
]);

export default {
  name: 'UiInput',

  mixins: [
    stylable,
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
    iconAfter: {
      type: String,
      default: null,
    },
    textAlign: {
      type: String,
      default: 'left',
      ...textAlignValidator,
    },
  },

  data: () => ({
    uniqueId: null,
    localValue: null,
    focused: false,
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
    this.init();
  },

  methods: {
    init() {
      this.uniqueId = this.id || `input-${generateHash()}`;
    },

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

      this.localValue = event.target.value;
      this.$emit('input', this.localValue);
    },

    handleChange(event) {
      if (this.disabled) return;

      this.localValue = event.target.value;
      this.$emit('change', this.localValue);
    },

    clear() {
      this.localValue = '';
      this.nodeInput.value = '';
      this.$emit('input', '');
    },

    genRoot(childNodes = []) {
      return this.$createElement('div', {
        class: {
          [this.styles.root]: true,
          [this.styles.isFilled]: this.localValue,
          [this.styles.isFocused]: this.focused,
          [this.styles.isReadOnly]: this.readOnly,
          [this.styles.isDisabled]: this.disabled,
          [this.styles.isClearable]: this.clearable,
          [this.styles.hasLabel]: this.label,
          [this.styles.hasIconBefore]: this.iconBefore,
          [this.styles.hasIconAfter]: this.iconAfter,
          [this.styles[`textAlign_${this.textAlign}`]]: this.textAlign,
        },
      }, childNodes);
    },

    genContainer(childNodes = []) {
      return this.$createElement('div', {
        class: this.styles.container,
      }, childNodes);
    },

    genLabel() {
      if (!this.label) return null;

      return this.$createElement('label', {
        class: {
          [this.styles.label]: true,
          [this.styles.labelActive]: this.localValue || this.focused,
        },
        attrs: {
          for: this.uniqueId,
        },
      }, [this.label]);
    },

    genWrapper(childNodes = []) {
      return this.$createElement('div', {
        class: this.styles.wrapper,
      }, childNodes);
    },

    genIconBefore() {
      if (!this.iconBefore) return null;

      const icon = this.$createElement(UiIcon, {
        props: { name: this.iconBefore },
      });

      return this.$createElement('label', {
        class: this.styles.iconBefore,
        attrs: {
          for: this.uniqueId,
        },
      }, [icon]);
    },

    genInput() {
      return this.$createElement('input', {
        class: this.styles.input,
        domProps: {
          value: this.localValue,
          required: this.required,
          disabled: this.disabled,
        },
        attrs: {
          id: this.uniqueId,
          type: this.type,
          name: this.name,
          placeholder: this.placeholder,
          readonly: this.readOnly,
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

    genIconAfter() {
      if (!this.iconAfter) return null;

      const icon = this.$createElement(UiIcon, {
        props: { name: this.iconAfter },
      });

      return this.$createElement('label', {
        class: this.styles.iconAfter,
        attrs: {
          for: this.uniqueId,
        },
      }, [icon]);
    },

    genButtonClear() {
      if (!this.localValue) return null;

      const icon = this.$createElement(UiIcon, {
        props: { name: 'cross' },
      });

      return this.$createElement('button', {
        class: this.styles.buttonClear,
        on: {
          click: this.clear,
        },
      }, [icon]);
    },
  },

  render() {
    return this.genRoot([
      this.genContainer([
        this.genLabel(),
        this.genWrapper([
          this.genIconBefore(),
          this.genInput(),
          this.genIconAfter(),
          this.clearable && this.genButtonClear(),
        ]),
      ]),
    ]);
  },
};
