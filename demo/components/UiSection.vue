<template>
  <section :class="$style.root">
    <UiText
      v-if="title"
      type="h2"
    >
      {{ title }}
    </UiText>

    <slot name="default" />
  </section>
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
  .root:not(:last-child) {
    margin-bottom: spacer(8);
  }
</style>
