<template>
  <div :class="$style.section">
    <UiText
      v-if="title"
      type="h2"
    >
      {{ title }}
    </UiText>

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

  :local {
    .section:not(:last-child) {
      // margin-bottom: spacer(8);
    }
  }
</style>
