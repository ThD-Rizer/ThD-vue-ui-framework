<template>
  <UiApp>
    <UiContainer :fluid="true">
      <UiHeader
        :version="version"
        :menu="routes"
      />

      <UiText
        v-if="heading"
        type="h1"
        class="mb-8"
      >
        {{ heading }}
      </UiText>

      <RouterView />
    </UiContainer>
  </UiApp>
</template>

<script>
  import packageJson from '@root/package.json';
  import routes from '@demo/router/routes';
  import UiHeader from '@demo/components/UiHeader';

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
      heading() {
        const route = this.routes.find(({ path }) => path === this.$route.path);

        return route?.heading || '';
      },
    },
  };
</script>

<style lang="scss" module>
  @import '~normalize.scss';
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500;1,700&display=swap');

  :global {
    body {
      font-family: 'Roboto', sans-serif;
      color: $colorMineShaft;
    }
  }
</style>
