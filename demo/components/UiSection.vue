<template>
  <section :class="$style.root">
    <slot name="default" />
  </section>
</template>

<script>
  export default {
    name: 'UiSection',
  };
</script>

<style lang="scss" module>
  .root {
    position: relative;
  }

  .root:not(:first-child) {
    margin-top: spacer(8);
  }

  .root:not(:last-child) {
    margin-bottom: spacer(8);
  }

  .root:last-child {
    border-bottom: 1px dashed rgba($colorEasternBlue, .3);
    padding-bottom: 20px;
  }
</style>
