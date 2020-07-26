import { generateHash, getSlot } from '@/utils/helpers';
import { factoryInjectable } from '@/mixins/injectable';
import { isNil } from '../../utils/inspect';
import styles from './UiRadio.scss';

const injectable = factoryInjectable({
  providerName: 'UiRadioGroup',
  injectorName: 'UiRadio',
  injectionData: [
    { from: 'model', to: 'modelFromParent' },
    { from: 'name', to: 'nameFromParent' },
    { from: 'classes', to: 'classesFromParent', default: null },
    { from: 'changeHandler', to: 'changeParent', default: () => false },
  ],
});

export default {
  name: 'UiRadio',

  mixins: [
    injectable,
  ],

  model: {
    prop: 'model',
    event: 'change',
  },

  props: {
    model: {
      type: [Boolean, Number, String],
      default: null,
    },
    value: {
      type: [Boolean, Number, String],
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
    state: null,
    focused: false,
  }),

  computed: {
    localModel() {
      if (!isNil(this.model)) {
        return this.model;
      }
      if (!isNil(this.modelFromParent)) {
        return this.modelFromParent;
      }
      return undefined;
    },

    isChecked() {
      return this.state === this.value;
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

    localModel: {
      handler(payload) {
        this.setState(payload);
      },
      immediate: true,
    },
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.uniqueId = this.id || `radio-${generateHash()}`;
    },

    change(payload) {
      if (this.state === payload) return;

      this.setState(payload);
      this.$emit('change', payload);
      this.changeParent(payload);
    },

    setState(payload) {
      if (this.state === payload) return;

      this.state = payload;
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
      return this.$createElement('div', {
        class: this.classesRoot,
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
          name: this.name || this.nameFromParent,
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
      return this.$createElement('label', {
        class: styles.radio,
        attrs: {
          for: this.uniqueId,
        },
      }, childNodes);
    },

    genMarker() {
      return this.$createElement('span', {
        class: styles.marker,
      });
    },

    genLabel(childNodes = []) {
      return this.$createElement('label', {
        class: styles.label,
        attrs: {
          for: this.uniqueId,
        },
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
