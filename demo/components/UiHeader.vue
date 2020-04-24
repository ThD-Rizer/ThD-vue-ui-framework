<template>
  <header :class="$style.header">
    <UiText
      tag="div"
      weight="medium"
    >
      UI Framework version {{ version }}
    </UiText>

    <div :class="$style.menu">
      <UiLink
        v-for="(item, index) in menu"
        :key="index"
        :to="item.path"
        :native="true"
        :class="$style.link"
      >
        {{ item.title }}
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
  };
</script>

<style lang="scss" module>
  .header {
    border-bottom: 1px solid color('heather');
    padding-top: spacer(5);
    padding-bottom: spacer(3);
    margin-bottom: spacer(5);
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
