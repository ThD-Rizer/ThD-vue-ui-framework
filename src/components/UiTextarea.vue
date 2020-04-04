<script>
  import testable from '@/mixins/testable';
  import { generateHash } from '../../utils/helpers';

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
            [this.$style.isDisabled]: this.disabled,
            [this.$style.hasLabel]: this.label,
          },
        }, childNodes);
      },

      genLabel() {
        if (!this.label) return null;

        return this.$createElement('label', {
          class: this.$style.label,
          attrs: {
            for: this.uniqueId,
          },
        }, [this.label]);
      },

      genTextarea() {
        return this.$createElement('textarea', {
          class: this.$style.textarea,
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
</script>

<style lang="scss" module>
  .root {
    &.isDisabled {
      pointer-events: none;
    }
    &.hasLabel {}
  }

  .label {
    display: inline-block;
    margin-bottom: 3px;
  }

  .textarea {
    @include resetButton;
    width: 100%;
    min-height: 100px;
    border-bottom: 1px solid $colorWhite;
    padding: 10px;
    line-height: 1.5;
    color: $colorWhite;
    box-sizing: border-box;
    outline: none;
    resize: vertical;
  }
</style>
