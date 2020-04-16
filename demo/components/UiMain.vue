<template>
  <main :class="$style.root">
    <slot />
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
