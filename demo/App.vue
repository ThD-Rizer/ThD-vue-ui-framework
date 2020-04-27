<template>
  <UiApp>
    <UiContainer>
      <UiHeader
        :version="version"
        :menu="routes"
      />

      <UiText type="h1">
        {{ title }}
      </UiText>

      <RouterView />
    </UiContainer>
  </UiApp>
</template>

<script>
  import packageJson from '@root/package.json';
  import routes from './router/routes';
  import UiHeader from './components/UiHeader';

  export default {
    name: 'DemoApplication',
    components: {
      UiHeader,
    },
    data: () => ({
      routes,
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
