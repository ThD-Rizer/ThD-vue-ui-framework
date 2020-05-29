<template>
  <header :class="$style.header">
    <UiText
      :block="true"
      color="paleSky"
      class="mb-4"
    >
      UI Framework <sup>v{{ version }}</sup>
    </UiText>

    <div :class="$style.menu">
      <UiLink
        v-for="(item, index) in localMenu"
        :key="index"
        :to="item.path"
        :active="item.active"
        :native="true"
        :class="$style.link"
      >
        {{ item.name }}
      </UiLink>
    </div>
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
      version: {
        type: String,
        default: null,
      },
    },
    computed: {
      localMenu() {
        return this.menu.map((item) => ({
          ...item,
          active: item.path === this.$route.path,
        }));
      },
    },
  };
</script>

<style lang="scss" module>
  .header {
    border-bottom: 1px solid $colorHeather;
    padding-top: spacer(5);
    padding-bottom: spacer(3);
    margin-bottom: spacer(6);
  }

  .menu {
    display: flex;
    flex-wrap: wrap;
  }

  .link {
    margin-bottom: spacer(2);

    &:not(:last-child) {
      margin-right: spacer(5);
    }
  }
</style>
