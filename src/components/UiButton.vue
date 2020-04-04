<script>
  import { propValidator } from '@/utils/helpers';
  import routable from '@/mixins/routable';

  const tagValidator = propValidator('tag', ['button', 'a', 'div']);
  const typeValidator = propValidator('type', ['button', 'submit', 'reset']);
  const sizeValidator = propValidator('size', ['small', 'normal', 'large']);
  const themeValidator = propValidator('theme', [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
    'silent',
    'background-brand',
    'outline-brand',
  ]);
  const textAlignValidator = propValidator('textAlign', ['left', 'center', 'right', 'justify']);

  export default {
    name: 'UiButton',
    mixins: [
      routable,
    ],
    props: {
      tag: {
        type: String,
        default: 'button',
        ...tagValidator,
      },
      type: {
        type: String,
        default: 'button',
        ...typeValidator,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      size: {
        type: String,
        default: 'normal',
        ...sizeValidator,
      },
      theme: {
        type: String,
        default: null,
        ...themeValidator,
      },
      fluid: {
        type: Boolean,
        default: false,
      },
      round: {
        type: Boolean,
        default: false,
      },
      circle: {
        type: Boolean,
        default: false,
      },
      squared: {
        type: Boolean,
        default: false,
      },
      flat: {
        type: Boolean,
        default: false,
      },
      active: {
        type: Boolean,
        default: false,
      },
      depressed: {
        type: Boolean,
        default: false,
      },
      textAlign: {
        type: String,
        default: 'center',
        ...textAlignValidator,
      },
      innerStyle: {
        type: [Object, String],
        default: null,
      },
    },
    computed: {
      attributes() {
        return (this.tag === 'button')
          ? { type: this.type }
          : null;
      },
      hasIcon() {
        return this.$scopedSlots.icon;
      },
      classesRoot() {
        const {
          $style,
          size,
          theme,
          flat,
          textAlign,
        } = this;
        return {
          [$style.root]: true,
          [$style.isDisabled]: this.disabled,
          [$style.isFluid]: this.fluid,
          [$style.isRound]: this.round,
          [$style.isCircle]: this.circle,
          [$style.isSquared]: this.squared,
          [$style.isFlat]: flat,
          [$style.hasIcon]: this.hasIcon,
          [$style.isDepressed]: (this.depressed && !flat),
          [$style.isActive]: this.active,
          [$style.sizeSmall]: size === 'small',
          [$style.sizeNormal]: size === 'normal',
          [$style.sizeLarge]: size === 'large',
          [$style.themePrimary]: theme === 'primary',
          [$style.themeSecondary]: theme === 'secondary',
          [$style.themeSuccess]: theme === 'success',
          [$style.themeDanger]: theme === 'danger',
          [$style.themeWarning]: theme === 'warning',
          [$style.themeInfo]: theme === 'info',
          [$style.themeLight]: theme === 'light',
          [$style.themeDark]: theme === 'dark',
          [$style.themeSilent]: theme === 'silent',
          [$style.themeBackgroundBrand]: theme === 'background-brand',
          [$style.themeOutlineBrand]: theme === 'outline-brand',
          [$style.textAlignLeft]: textAlign === 'left',
          [$style.textAlignCenter]: textAlign === 'center',
          [$style.textAlignRight]: textAlign === 'right',
          [$style.textAlignJustify]: textAlign === 'justify',
        };
      },
    },
    methods: {
      genRoot(childNodes = []) {
        const { tag, data } = this.generateRouterLink(this.classesRoot);

        data.attrs = { ...data.attrs, ...this.attributes };

        return this.$createElement(tag, data, childNodes);
      },
      genDefaultSlot() {
        const { default: defaultSlot } = this.$scopedSlots;

        if (!defaultSlot) return null;

        return defaultSlot();
      },
      genIconSlot() {
        const { icon } = this.$scopedSlots;

        if (!icon) return null;

        return icon();
      },
      genContent() {
        const defaultSlot = this.genDefaultSlot();

        if (!this.hasIcon && !defaultSlot) return null;

        return this.$createElement('span', {
          class: this.$style.inner,
          style: this.innerStyle,
        }, this.genIconSlot() || defaultSlot);
      },
    },
    render() {
      return this.genRoot([
        this.genContent(),
      ]);
    },
  };
</script>

<style lang="scss" module>
  @mixin theme($backgroundColor, $color: false) {
    background-color: $backgroundColor;
    color: $color;

    @include hover {
      background-color: darken($backgroundColor, 15%);
    }

    &.isActive {
      background-color: darken($backgroundColor, 15%);

      @include hover {
        background-color: darken($backgroundColor, 25%);
      }
    }
  }

  .root {
    @include resetButton;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    border-radius: 4px;
    font-weight: 500;
    color: $colorBlack;
    text-align: center;
    text-decoration: none;
    transition: $primaryTransition;
    position: relative;
    outline: none;
    vertical-align: middle;
    user-select: none;

    &.isFluid {
      display: flex;
      flex: 1;
      width: 100%;
      @include marginX(0);
    }

    &.sizeSmall {
      font-size: 10px;
      line-height: 12px;
    }

    &.sizeNormal {
      font-size: 13px;
      line-height: 16px;
    }

    &.sizeLarge {
      font-size: 16px;
      line-height: 18px;
    }

    &.isRound {
      border-radius: 30px;
    }

    &.isCircle {
      border-radius: 50%;
    }

    &.isSquared {
      border-radius: 0;
    }

    &.isDisabled {
      color: #cecece;
      pointer-events: none;
    }

    @include hover {
      z-index: 1;
    }

    &:not(.isDepressed):not(.isFlat):not(.themeSilent) {
      box-shadow: 0 1px 8px 0 transparent;

      @include hover {
        box-shadow: 0 1px 8px 0 rgba(#000, .2);
      }
      @include active {
        box-shadow: 0 1px 8px 0 rgba(#000, .2);
      }
    }
  }

  $paddingXSmall: 8px;
  $paddingYSmall: 15px;
  $paddingXNormal: 12px;
  $paddingYNormal: 20px;
  $paddingXLarge: 16px;
  $paddingYLarge: 30px;

  .inner {
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    width: inherit;
    border-radius: inherit;
    color: inherit;
    position: relative;
    white-space: nowrap;
    box-sizing: border-box;

    .sizeSmall:not(.hasIcon) & {
      padding: $paddingXSmall $paddingYSmall;
    }

    .sizeNormal:not(.hasIcon) & {
      padding: $paddingXNormal $paddingYNormal;
    }

    .sizeLarge:not(.hasIcon) & {
      padding: $paddingXLarge $paddingYLarge;
    }

    .sizeSmall.hasIcon & {
      padding: $paddingXSmall;
    }

    .sizeNormal.hasIcon & {
      padding: $paddingXNormal;
    }

    .sizeLarge.hasIcon & {
      padding: $paddingXLarge;
    }

    .textAlignLeft & {
      justify-content: flex-start;
    }

    .textAlignCenter & {
      justify-content: center;
    }

    .textAlignRight & {
      justify-content: flex-end;
    }

    .textAlignJustify & {
      justify-content: space-between;
    }
  }

  .themePrimary {
    @include theme($colorPrimary, $colorWhite);
  }

  .themeSecondary {
    @include theme($colorSecondary, $colorWhite);
  }

  .themeSuccess {
    @include theme($colorSuccess, $colorWhite);
  }

  .themeDanger {
    @include theme($colorDanger, $colorWhite);
  }

  .themeWarning {
    @include theme($colorWarning);
  }

  .themeInfo {
    @include theme($colorInfo, $colorWhite);
  }

  .themeLight {
    @include theme($colorLight);
  }

  .themeDark {
    @include theme($colorDark, $colorWhite);
  }

  .themeSilent {
    cursor: default !important;

    & .inner {
      width: auto;
    }
  }

  .themeBackgroundBrand,
  .themeOutlineBrand {
    &::before {
      content: '';
      display: block;
      @include gradientBrand;
      border-radius: inherit;
      position: absolute;
      @include positionAll(0);
    }

    &.isDisabled::before {
      opacity: .5;
      filter: grayscale(1);
    }
  }

  .themeBackgroundBrand {
    & .inner {
      color: $colorWhite;
    }
  }

  .themeOutlineBrand {
    & .inner {
      width: auto;
      background-color: $colorWhite;
      border-radius: 2px;
      padding: 10px;
      margin: 2px;
    }

    &.sizeSmall .inner {
      padding: 6px;
    }

    &.sizeLarge .inner {
      padding: 14px;
    }
  }
</style>
