import {
  isUndefined,
  isNil,
  isBoolean,
  isArray,
  isPlainObject,
} from '@/utils/inspect';
import {
  generateHash,
  getSlot,
  propValidator,
  cloneArray,
  cloneDeep,
} from '@/utils/helpers';
import { factoryInjectable } from '@/mixins/injectable';
import UiIcon from '@/components/UiIcon';
import styles from './UiCheckbox.scss';

const injectable = factoryInjectable({
  providerName: 'UiCheckboxGroup',
  injectorName: 'UiCheckbox',
  injectionData: [
    { from: 'model', to: 'modelFromParent' },
    { from: 'name', to: 'nameFromParent' },
    { from: 'classes', to: 'classesFromParent', default: null },
    { from: 'changeHandler', to: 'changeParent', default: () => false },
  ],
});

const iconNameValidator = propValidator('iconName', [
  'check',
  'square',
  'cross',
]);

export default {
  name: 'UiCheckbox',

  mixins: [
    injectable,
  ],

  model: {
    prop: 'model',
    event: 'change',
  },

  props: {
    model: {
      type: [Boolean, Array, Object],
      default: undefined,
    },
    value: {
      type: [Boolean, Number, String],
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
      const { state } = this;

      if (isBoolean(state)) {
        return state;
      }
      if (isArray(state)) {
        return state.includes(this.value);
      }
      if (isPlainObject(state)) {
        return state[this.value];
      }
      return false;
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
    localModel: {
      handler(payload) {
        this.setState(payload);
      },
      immediate: true,
      deep: true,
    },
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.uniqueId = this.id || `checkbox-${generateHash()}`;

      if (isUndefined(this.localModel) && !isUndefined(this.checked)) {
        this.setState(this.checked);
      }
    },

    change(payload) {
      const { localModel } = this;
      let state = null;

      if (isUndefined(localModel)) {
        state = !this.state;
      }

      if (isBoolean(localModel)) {
        state = !localModel;
      }

      if (isArray(localModel)) {
        const value = (this.value === +payload) ? +payload : payload;

        state = cloneArray(localModel);

        if (state.includes(value)) {
          const index = state.findIndex((item) => item === value);
          state.splice(index, 1);
        } else {
          state.push(value);
        }
      }

      if (isPlainObject(localModel)) {
        state = cloneDeep(localModel);
        state[payload] = !state[payload];
      }

      if (isNil(state)) return;

      this.setState(state);
      this.$emit('change', state);
      this.changeParent(state);
    },

    setState(payload) {
      this.$set(this, 'state', payload);
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
          type: 'checkbox',
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

    genCheckbox(childNodes = []) {
      return this.$createElement('label', {
        class: styles.checkbox,
        attrs: {
          for: this.uniqueId,
        },
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
      this.genCheckbox([
        this.genMarker(),
      ]),
      this.genLabel([
        defaultSlot,
      ]),
    ]);
  },
};
