<template>
  <section :class="$style.root">
    <UiText
      v-if="title"
      :class="[$style.heading, 'mb-6']"
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

  .heading {
    background-color: rgba($colorHeather, .1);
    border-left: 3px solid rgba($colorHeather, .3);
    padding: 8px 0 8px 16px;
    color: $colorPaleSky;
  }
</style>
