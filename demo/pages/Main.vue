<template>
  <UiMain>
    <UiMarkdownViewer
      :source="changelogMd"
      :class="$style.markdownViewer"
      :toc="true"
    />
  </UiMain>
</template>

<script>
  import changelogMd from '@root/CHANGELOG.md';

  export default {
    name: 'PageMain',
    data: () => ({
      changelogMd,
    }),
  };
</script>

<style lang="scss" module>
  .markdownViewer {
    h1:first-child {
      border-bottom: 0;
    }
  }
</style>
