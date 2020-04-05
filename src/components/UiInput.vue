<script>
  import { generateHash, propValidator } from '@/utils/helpers';
  import testable from '@/mixins/testable';
  import { UiIcon } from '@/components';

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
            [this.$style.root]: true,
            [this.$style.hasIconBefore]: this.iconBefore,
            [this.$style.hasLabel]: this.label,
            [this.$style.isFilled]: this.value,
            [this.$style.isFocused]: this.focused,
            [this.$style.isDisabled]: this.disabled,
          },
        }, childNodes);
      },

      genLabel() {
        if (!this.label) return null;

        return this.$createElement('label', {
          class: {
            [this.$style.label]: true,
            [this.$style.labelActive]: this.value || this.focused,
          },
          attrs: {
            for: this.uniqueId,
          },
        }, [this.label]);
      },

      genContainer(childNodes = []) {
        return this.$createElement('div', {
          class: this.$style.container,
        }, childNodes);
      },

      genIconBefore() {
        if (!this.iconBefore) return null;

        const icon = this.$createElement(UiIcon, {
          props: { name: this.iconBefore },
        });

        return this.$createElement('label', {
          class: this.$style.iconBefore,
          attrs: {
            for: this.uniqueId,
          },
        }, [icon]);
      },

      genInput() {
        return this.$createElement('input', {
          class: this.$style.input,
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
</script>

<style lang="scss" module>
  $size: 40px;
  $colorTheme: $colorCyan;

  .root {
    &.hasIconBefore {}

    &.hasLabel {
      padding-top: 20px;
    }

    &.isFilled {}

    &.isFocused {}

    &.isDisabled {
      pointer-events: none;
    }
  }

  .container {
    position: relative;
  }

  .iconBefore {
    display: flex;
    align-items: center;
    justify-content: center;
    width: $size;
    height: $size;
    background-color: $colorTheme;
    border-radius: 50%;
    font-size: 20px;
    color: $colorWhite;
    position: absolute;
    top: 0;
    left: 0;

    .isFilled &,
    .isFocused & {
      pointer-events: none;
    }
  }

  .label {
    font-size: 16px;
    line-height: 1;
    color: $colorGray;
    position: absolute;
    top: 12px;
    left: 11px;
    transition: 0.2s $transitionTimeFunction;
    transition-property: transform;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    .hasIconBefore & {
      left: $size + 11px;
    }

    &.labelActive,
    .input:not([disabled]):focus ~ & {
      font-size: 13px;
      color: $colorBlack;
      transform: translate3d(-11px, -30px, 0);
      pointer-events: none;

      .hasIconBefore & {
        transform: translate3d(-36px, -30px, 0);
      }
    }
  }

  .input {
    width: 100%;
    height: $size;
    background-color: rgba($colorWhite, .75);
    border: 1px solid $colorTheme;
    border-radius: 25px;
    padding: 0 10px;
    box-sizing: border-box;
    outline: none;
    transition: 0.2s $transitionTimeFunction;
    transition-property: background-color, box-shadow;

    @include focus {
      background-color: $colorWhite;
      box-shadow: inset 0 0 8px 0 rgba($colorTheme, .3),
        0 0 8px 0 rgba($colorTheme, .3);
    }

    .hasIconBefore & {
      padding-left: $size + 10px;
    }
  }
</style>
