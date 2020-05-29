<template>
  <UiMain :class="$style.main">
    <UiText type="h1">
      404
    </UiText>
    <UiText color="paleSky">
      Page not found
    </UiText>

    <UiText
      :block="true"
      class="mt-6"
    >
      Back to
      <UiLink to="/">
        Main page
      </UiLink>
    </UiText>
  </UiMain>
</template>

<script>
  export default {
    name: 'ErrorNotFound',
  };
</script>

<style lang="scss" module>
  .main {
    padding-top: 30%;
    text-align: center;
  }
</style>
