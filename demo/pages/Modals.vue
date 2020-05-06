<template>
  <UiMain :class="$style.main">
    <UiSection title="Overlay">
      <UiButton @click="toggleOverlay">
        Toggle
      </UiButton>

      <p>showOverlay: {{ showOverlay }}</p>

      <UiOverlay v-model="showOverlay">
        <UiContainer :class="$style.overlayContainer">
          <p>
            Overlay content
          </p>
          <UiButton @click="closeOverlay">
            Close
          </UiButton>
        </UiContainer>
      </UiOverlay>
    </UiSection>

    <UiSection title="Navigation">
      <UiButton @click="toggleNavigation">
        Toggle
      </UiButton>

      <p>showNavigation: {{ showNavigation }}</p>

      <UiDrawer
        v-model="showNavigation"
        :swipeable="true"
      >
        <div :class="$style.drawerNavigation">
          <UiText type="h2">
            Left navigation
          </UiText>
          <p
            v-for="item in 3"
            :key="item"
          >
            <UiLink
              to="/"
              :native="true"
            >
              Link {{ item }}
            </UiLink>
          </p>
        </div>
      </UiDrawer>
    </UiSection>

    <UiSection title="Navigation right">
      <UiButton @click="toggleNavigationRight">
        Toggle
      </UiButton>

      <p>showNavigationRight: {{ showNavigationRight }}</p>

      <UiDrawer
        v-model="showNavigationRight"
        :right="true"
      >
        <div :class="$style.drawerNavigation">
          <UiText type="h2">
            Right navigation
          </UiText>
          <p
            v-for="item in 3"
            :key="item"
          >
            <UiLink
              to="/"
              :native="true"
            >
              Link {{ item }}
            </UiLink>
          </p>
        </div>
      </UiDrawer>
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'ModalsPage',
    data: () => ({
      showOverlay: false,
      showNavigation: false,
      showNavigationRight: false,
    }),
    methods: {
      toggleOverlay() {
        this.showOverlay = !this.showOverlay;
      },
      closeOverlay() {
        this.showOverlay = false;
      },
      toggleNavigation() {
        this.showNavigation = !this.showNavigation;
      },
      toggleNavigationRight() {
        this.showNavigationRight = !this.showNavigationRight;
      },
    },
  };
</script>

<style lang="scss" module>
  .main {
    height: 2000px;
  }

  .overlayContainer {
    color: $colorWhite;
  }

  .drawerNavigation {
    padding: 20px;
  }
</style>
