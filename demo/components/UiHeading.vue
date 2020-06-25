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
    border-bottom: 0 solid rgba($colorHeather, .5);
    padding-bottom: spacer(1);
    color: $colorPaleSky;
  }

  .type_h1 {
    border-bottom-width: 3px;
    margin-bottom: spacer(6);
  }

  .type_h2 {
    border-bottom-width: 2px;
    margin-bottom: spacer(5);
  }

  .type_h3 {
    border-bottom-width: 1px;
    margin-bottom: spacer(4);
  }
</style>
