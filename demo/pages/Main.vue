<template>
  <UiMain>
    <UiMarkdownViewer :source="changelogMd" />
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
