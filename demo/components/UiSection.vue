<template>
  <div :class="$style.section">
    <!--<UiText-->
    <!--  v-if="title"-->
    <!--  type="h2"-->
    <!--&gt;-->
    <!--  {{ title }}-->
    <!--</UiText>-->

    {{ title }}

    <slot />
  </div>
</template>

<script>
  export default {
    name: 'UiSection',
    props: {
      title: {
        type: String,
        default: null,
      },
    },
  };
</script>

<style lang="scss" module>
  // @import '../../styles/helpers';

  .section:not(:last-child) {
    // margin-bottom: spacer(8);
  }
</style>
