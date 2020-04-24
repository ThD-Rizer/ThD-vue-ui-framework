<template>
  <UiMain>
    <p>
      <UiButton
        :theme="theme"
        :customStyles="customStyles"
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
      isChecked: false,
      theme: 'secondary',
      customStyles: null,
    }),
    methods: {
      themeTest() {
        const root = [
          this.$style.buttonCustomBackground,
          this.$style.buttonCustomRadius,
        ];
        const inner = this.$style.buttonInnerCustom;

        if (!this.isChecked) {
          this.theme = 'primary';
          this.customStyles = {
            root,
            inner,
          };
        } else {
          this.theme = 'secondary';
          this.customStyles = null;
        }
        this.isChecked = !this.isChecked;
      },
    },
  };
</script>

<style lang="scss" module>
  .buttonCustomBackground {
    border-color: $colorDark;
  }

  .buttonCustomRadius {
    border-radius: 0;
  }

  .buttonInnerCustom {
    font-size: 10px;
    color: $colorWhite;
  }
</style>
