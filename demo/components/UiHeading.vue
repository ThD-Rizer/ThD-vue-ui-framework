<template>
  <UiText
    :class="classesRoot"
    :type="localType"
    tag="div"
  >
    <slot name="default" />
  </UiText>
</template>

<script>
  export default {
    name: 'UiHeading',
    props: {
      type: {
        type: String,
        default: 'h1',
      },
    },
    computed: {
      localType() {
        return {
          h1: 'h2',
          h2: 'h4',
          h3: 'h5',
        }[this.type];
      },
      classesRoot() {
        const { type } = this;
        return {
          [this.$style.root]: true,
          [this.$style[`type_${type}`]]: true,
        };
      },
    },
  };
</script>

<style lang="scss" module>
  .root {
    background-color: rgba($colorHeather, .1);
    border-left: 3px solid rgba($colorHeather, .3);
    padding-left: spacer(4);
    color: $colorPaleSky;
  }

  .type_h1 {
    @include paddingY(spacer(3));
    margin-bottom: spacer(6);
  }

  .type_h2 {
    @include paddingY(spacer(2));
    margin-bottom: spacer(5);
  }

  .type_h3 {
    @include paddingY(spacer(1));
    margin-bottom: spacer(4);
  }
</style>
