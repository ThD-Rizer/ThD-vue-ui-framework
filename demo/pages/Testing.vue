<template>
  <UiMain>
    <UiRow>
      <UiCol>
        <UiButton
          :theme="theme"
          :customStyles="customStyles"
          @click="themeTest"
        >
          Button dynamic stylable
        </UiButton>
      </UiCol>
    </UiRow>

    <UiRow class="mt-4">
      <UiCol>
        <UiButton
          size="small"
          theme="cool"
        >
          Button cool theme
        </UiButton>
      </UiCol>

      <UiCol>
        <UiButton theme="cool">
          Button cool theme
        </UiButton>
      </UiCol>

      <UiCol>
        <UiButton
          size="large"
          theme="cool"
        >
          Button cool theme
        </UiButton>
      </UiCol>
    </UiRow>

    <UiRow class="mt-4">
      <UiCol xs="6">
        <UiInput
          label="Введите мастер-ключ API"
          placeholder="ex: 999923948743jhjhdsf792734"
          textAlign="center"
          class="t-center"
        />
      </UiCol>

      <UiCol xs="6">
        <UiInput
          :clearable="true"
          label="Введите мастер-ключ API"
          placeholder="ex: 999923948743jhjhdsf792734"
        />
      </UiCol>
    </UiRow>
  </UiMain>
</template>

<script>
  export default {
    name: 'PageTesting',
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
    border-color: $colorOuterSpace;
  }

  .buttonCustomRadius {
    border-radius: 0;
  }

  .buttonInnerCustom {
    font-size: 10px;
    color: $colorWhite;
  }
</style>
