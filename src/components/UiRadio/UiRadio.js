import { generateHash, getSlot } from '@/utils/helpers';
import styles from './UiRadio.scss';

export default {
  name: 'UiRadio',

  inject: {
    parentState: {
      from: 'state',
      default() {
        return {};
      },
    },
    classesFromParent: {
      from: 'classes',
      default: null,
    },
    changeParent: {
      from: 'changeHandler',
      default() {
        return () => {};
      },
    },
  },

  model: {
    prop: 'model',
    event: 'change',
  },

  props: {
    model: {
      type: [String, Number, Boolean],
      default: null,
    },
    value: {
      type: [String, Number, Boolean],
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
    checked: {
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
  },

  data: () => ({
    uniqueId: null,
    localModel: null,
    focused: false,
  }),

  computed: {
    isChecked() {
      return this.localModel === this.value;
    },
    classesRoot() {
      return {
        [styles.root]: true,
        [styles.isChecked]: this.isChecked,
        [styles.isReadOnly]: this.readOnly,
        [styles.isDisabled]: this.disabled,
        [styles.isFocused]: this.focused,
        ...this.classesFromParent,
      };
    },
  },

  watch: {
    checked: {
      handler() {
        this.change(this.value);
      },
      immediate: true,
    },

    model: {
      handler(payload) {
        this.setLocalModel(payload);
      },
      immediate: true,
    },

    'parentState.model': {
      handler(payload) {
        this.setLocalModel(payload);
      },
      immediate: true,
    },
  },

  mounted() {
    this.uniqueId = this.id || `radio-${generateHash()}`;
  },

  methods: {
    change(payload) {
      if (this.localModel === payload) return;

      this.setLocalModel(payload);
      this.changeParent(payload);
      this.$emit('change', payload);
    },

    setLocalModel(payload) {
      if (this.localModel === payload) return;

      this.localModel = payload;
    },

    handleFocus() {
      if (this.readOnly || this.disabled) return;

      this.focused = true;
      this.$emit('focus');
    },

    handleBlur() {
      if (this.readOnly || this.disabled) return;

      this.focused = false;
      this.$emit('blur');
    },

    handleChange(payload) {
      if (this.readOnly || this.disabled) return;

      this.change(payload);
    },

    genRoot(childNodes = []) {
      return this.$createElement('label', {
        class: this.classesRoot,
        attrs: {
          for: this.uniqueId,
        },
      }, childNodes);
    },

    genInput() {
      return this.$createElement('input', {
        class: styles.input,
        domProps: {
          value: this.value,
          required: this.required,
          checked: this.isChecked,
          disabled: this.disabled,
        },
        attrs: {
          id: this.uniqueId,
          type: 'radio',
          name: this.name || this.parentState.name,
          readonly: this.readOnly,
        },
        on: {
          focus: this.handleFocus,
          blur: this.handleBlur,
          change: (event) => this.handleChange(event.target.value),
        },
      });
    },

    genRadio(childNodes = []) {
      return this.$createElement('div', {
        class: styles.radio,
      }, childNodes);
    },

    genMarker() {
      return this.$createElement('span', {
        class: styles.marker,
      });
    },

    genLabel(childNodes = []) {
      return this.$createElement('span', {
        class: styles.label,
      }, childNodes);
    },
  },

  render() {
    const defaultSlot = getSlot(this);

    return this.genRoot([
      this.genInput(),
      this.genRadio([
        this.genMarker(),
      ]),
      this.genLabel([
        defaultSlot,
      ]),
    ]);
  },
};
