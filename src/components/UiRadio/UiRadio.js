import { generateHash, getSlot } from '@/utils/helpers';
import { factoryToggleable } from '@/mixins/toggleable';
import styles from './UiRadio.scss';

const toggleable = factoryToggleable('model', 'change');

export default {
  name: 'UiRadio',
  mixins: [
    toggleable,
  ],
  props: {
    model: {
      type: [String, Number],
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
  },

  data: () => ({
    uniqueId: null,
  }),

  computed: {
    isChecked() {
      return this.model === this.value;
    },
    classesRoot() {
      return {
        [styles.root]: true,
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
    this.uniqueId = this.id || `radio-${generateHash()}`;
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
          type: 'radio',
          name: this.name,
        },
        on: {
          change: this.toggle,
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
      return this.$createElement('div', {
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
