<template>
  <UiMain :class="$style.main">
    <UiSection title="Overlay">
      <UiOverlay v-model="shownOverlay">
        <UiContainer :class="$style.overlayContainer">
          <p>
            Overlay content
          </p>
          <UiButton @click="closeOverlay">
            Close
          </UiButton>
        </UiContainer>
      </UiOverlay>

      <UiButton @click="toggleOverlay">
        Toggle
      </UiButton>
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'ModalsPage',
    data: () => ({
      shownOverlay: false,
    }),
    methods: {
      toggleOverlay() {
        this.shownOverlay = !this.shownOverlay;
      },
      closeOverlay() {
        this.shownOverlay = false;
      },
    },
  };
</script>

<style lang="scss" module>
  .main {
    height: 2000px;
  }

  .overlayContainer {
    color: color('white');
  }
</style>
