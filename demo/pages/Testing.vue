<template>
  <UiMain>
    <p>
      <UiButton
        :themeStyles="themeStyles"
        :resetDefaultStyles="resetDefaultStyles"
        @click="themeTest"
      >
        Button dynamic stylable
      </UiButton>
    </p>
  </UiMain>
</template>

<script>
  export default {
    name: 'Testing',
    data: () => ({
      themeStyles: null,
      resetDefaultStyles: null,
    }),
    methods: {
      themeTest() {
        this.themeStyles = {
          root: this.$style.buttonCustom,
        };
        this.resetDefaultStyles = null;
      },
    },
  };
</script>

<style lang="scss" module>
  .buttonCustom {
    background-color: $colorGray;
    color: $colorDanger;
  }
</style>
