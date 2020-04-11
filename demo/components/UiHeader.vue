<template>
  <header :class="$style.header">
    <UiTabs :value="$route.path">
      <UiContainer>
        <UiTab
          v-for="(item, index) in menu"
          :key="index"
          :name="item.path"
          :to="item.path"
          native
        >
          {{ item.title }}
        </UiTab>
      </UiContainer>
    </UiTabs>
  </header>
</template>

<script>
  export default {
    name: 'UiHeader',
    props: {
      menu: {
        type: Array,
        default: () => [],
      },
    },
  };
</script>

<style lang="scss" module>
  .header {
    padding: 20px 0;
    margin-bottom: 30px;
  }
</style>
