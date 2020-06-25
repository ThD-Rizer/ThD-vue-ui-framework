import { isUndefined, isArray } from '@/utils/inspect';
import { generateHash, getSlot, propValidator } from '@/utils/helpers';
import UiIcon from '@/components/UiIcon';
import styles from './UiCheckbox.scss';

const iconNameValidator = propValidator('iconName', [
  'check',
  'square',
  'cross',
]);

export default {
  name: 'UiCheckbox',

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
      default: undefined,
    },
    value: {
      type: [String, Number, Boolean],
      default: undefined,
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
      default: undefined,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    iconName: {
      type: String,
      default: 'check',
      ...iconNameValidator,
    },
  },

  data: () => ({
    uniqueId: null,
    localModel: null,
    focused: false,
  }),

  computed: {
    isBooleanState() {
      return isUndefined(this.value);
    },

    isArrayState() {
      return isArray(this.model) || isArray(this.parentModel);
    },

    parentModel() {
      return this.parentState.model;
    },

    isChecked() {
      return this.isBooleanState
        ? this.localModel
        : this.localModel === this.value;
    },

    classesRoot() {
      return {
        [styles.root]: true,
        [styles.isFluid]: this.fluid,
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
      handler(payload) {
        console.log('[watch] checked:', typeof payload, payload, this.value);
        if (isUndefined(payload)) return;
        this.change(this.value);
      },
      immediate: true,
    },

    model: {
      handler(payload) {
        console.log('[watch] model:', typeof payload, payload);
        if (isUndefined(payload)) return;
        this.change(payload);
      },
      immediate: true,
    },

    'parentState.model': {
      handler(payload) {
        console.log('[watch] parentState.model:', typeof payload, payload);
        if (isUndefined(payload)) return;
        this.change(payload);
      },
      immediate: true,
    },
  },

  beforeCreate() {
    const { _uid: uid } = this;
    console.log('[UiCheckbox]', 'uid:', uid, this);
  },

  mounted() {
    this.uniqueId = this.id || `checkbox-${generateHash()}`;
  },

  methods: {
    change(payload) {
      console.log('[change] payload:', typeof payload, payload);

      if (this.localModel === payload) return;

      this.localModel = payload;
      this.changeParent(payload);
      this.$emit('change', payload);
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

      const state = this.isBooleanState
        ? !this.localModel
        : payload;

      console.log('[handleChange] payload:', payload);
      console.log('[handleChange] state:', state);

      this.change(state);
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
          type: 'checkbox',
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

    genCheckbox(childNodes = []) {
      return this.$createElement('div', {
        class: styles.checkbox,
      }, childNodes);
    },

    genMarkerIcon(name) {
      return this.$createElement(UiIcon, {
        class: [
          styles.marker,
          styles[`marker_${name}`],
        ],
        props: { name },
      });
    },

    genMarkerSquare() {
      return this.$createElement('span', {
        class: [
          styles.marker,
          styles.marker_square,
        ],
      });
    },

    genMarker() {
      const { iconName } = this;
      if (iconName === 'square') {
        return this.genMarkerSquare();
      }

      return this.genMarkerIcon(iconName);
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
      this.genCheckbox([
        this.genMarker(),
      ]),
      this.genLabel([
        defaultSlot,
      ]),
    ]);
  },
};
