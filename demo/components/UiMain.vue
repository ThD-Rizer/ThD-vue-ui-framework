<template>
  <main :class="$style.root">
    <slot name="default" />
  </main>
</template>

<script>
  export default {
    name: 'UiMain',
  };
</script>

<style lang="scss" module>
  .root {
    padding-bottom: spacer(16);
  }
</style>
