<template>
  <header :class="$style.header">
    <UiText
      tag="div"
      weight="medium"
    >
      UI Framework version {{ version }}
    </UiText>

    <div>
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

    <!--<UiTabs :value="$route.path">-->
    <!--  <UiContainer>-->
    <!--    <UiTab-->
    <!--      v-for="(item, index) in menu"-->
    <!--      :key="index"-->
    <!--      :name="item.path"-->
    <!--      :to="item.path"-->
    <!--      native-->
    <!--    >-->
    <!--      {{ item.title }}-->
    <!--    </UiTab>-->
    <!--  </UiContainer>-->
    <!--</UiTabs>-->
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
    border-bottom: 1px solid $colorGrayLight;
    @include paddingY(spacer(5));
    margin-bottom: spacer(5);
  }

  .link {
    &:not(:first-child) {
      margin-left: spacer(5);
    }
  }
</style>
