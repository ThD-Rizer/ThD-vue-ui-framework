<template>
  <UiMain>
    <p>
      <UiButton
        :customStyles="customStyles"
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
      isChecked: false,
      customStyles: null,
      resetDefaultStyles: null,
    }),
    methods: {
      themeTest() {
        const root = [
          this.$style.buttonCustomBackground,
          this.$style.buttonCustomRadius,
        ];
        const inner = this.$style.buttonInnerCustom;

        this.customStyles = {
          root: !this.isChecked ? root : '',
          inner: !this.isChecked ? inner : '',
        };
        this.resetDefaultStyles = null;
        this.isChecked = !this.isChecked;
      },
    },
  };
</script>

<style lang="scss" module>
  .buttonCustomBackground {
    background-color: $colorDark;
  }

  .buttonCustomRadius {
    border-radius: 0;
  }

  .buttonInnerCustom {
    font-size: 10px;
    color: $colorDanger;
  }
</style>
