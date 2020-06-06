import { generateHash, getSlot, propValidator } from '@/utils/helpers';
import { factoryToggleable } from '@/mixins/toggleable';
import UiIcon from '@/components/UiIcon';
import styles from './UiCheckbox.scss';

const toggleable = factoryToggleable('model', 'change');

const iconNameValidator = propValidator('iconName', [
  'check',
  'square',
  'cross',
]);

export default {
  name: 'UiCheckbox',
  mixins: [
    toggleable,
  ],
  props: {
    model: {
      type: Boolean,
      default: undefined,
    },
    value: {
      type: [String, Number],
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
  }),

  computed: {
    isChecked() {
      return this.model;
    },
    classesRoot() {
      return {
        [styles.root]: true,
        [styles.isFluid]: this.fluid,
        [styles.isChecked]: this.isChecked,
        [styles.isReadOnly]: this.readOnly,
        [styles.isDisabled]: this.disabled,
      };
    },
  },

  watch: {
    checked(newValue) {
      if (newValue === this.state) return;
      this.toggle();
    },
  },

  mounted() {
    this.uniqueId = this.id || `checkbox-${generateHash()}`;
  },

  methods: {
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
          readonly: this.readOnly,
          disabled: this.disabled,
        },
        attrs: {
          id: this.uniqueId,
          type: 'checkbox',
          name: this.name,
        },
        on: {
          change: this.toggle,
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
      return this.$createElement('div', {
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
