<template>
  <UiApp>
    <UiHeader :menu="routes" />

    <UiContainer>
      <UiText
        tag="div"
        color="dusty-gray"
        weight="medium"
      >
        Framework version {{ version }}
      </UiText>

      <UiText type="h1">
        {{ title }}
      </UiText>

      <RouterView />
    </UiContainer>
  </UiApp>
</template>

<script>
  import packageJson from '@root/package.json';
  import routes from '@root/demo/router/routes';

  import uiHeader from '@root/demo/components/UiHeader';

  export default {
    name: 'DocsApplication',
    components: {
      uiHeader,
    },
    data: () => ({
      routes: routes.slice(1),
      version: packageJson.version,
    }),
    computed: {
      title() {
        const route = this.routes.find(({ path }) => path === this.$route.path);

        return route ? route.title : '';
      },
    },
  };
</script>

<style lang="scss">
  // @import '../styles/fonts';
</style>
