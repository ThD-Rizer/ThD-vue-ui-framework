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
  .root {
    border-bottom: 1px dashed rgba($colorAzureRadiance, .3);
    padding-bottom: 20px;
    position: relative;
  }

  .root:not(:last-child) {
    margin-bottom: spacer(6);
  }
</style>
