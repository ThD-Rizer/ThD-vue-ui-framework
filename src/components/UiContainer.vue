<script>
  import { propValidator } from '@/utils/helpers';

  const tagValidator = propValidator('tag', ['div', 'section', 'header', 'footer']);

  export default {
    name: 'UiContainer',
    props: {
      tag: {
        type: String,
        default: 'div',
        ...tagValidator,
      },
      fluid: {
        type: Boolean,
        default: false,
      },
    },
    render(h) {
      const { $style } = this;

      return h(this.tag, {
        class: {
          [$style.root]: true,
          [$style.isFluid]: this.fluid,
        },
      }, this.$slots.default);
    },
  };
</script>

<style lang="scss" module>
  .root {
    width: calc(100% - 30px);
    padding-left: 15px;
    padding-right: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: content-box;

    &.isFluid {
      max-width: map-get($gridMaxWidth, 'xl');
    }

    &:not(.isFluid) {
      max-width: calc(100% - 15px);

      @include mediaMin('sm') {
        max-width: map-get($gridMaxWidth, 'sm');
      }

      @include mediaMin('md') {
        max-width: map-get($gridMaxWidth, 'md');
      }

      @include mediaMin('lg') {
        max-width: map-get($gridMaxWidth, 'lg');
      }

      @include mediaMin('xl') {
        max-width: map-get($gridMaxWidth, 'xl');
      }
    }
  }
</style>
