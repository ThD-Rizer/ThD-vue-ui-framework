<template>
  <UiMain>
    <UiRow>
      <UiCol>
        <UiInput
          v-model="fontSize"
          label="Font size"
        />
      </UiCol>
    </UiRow>

    <UiSection>
      <UiHeading>
        Default
      </UiHeading>

      <UiRow :style="{ fontSize: `${fontSize}px` }">
        <UiCol>
          <UiIcon name="check" />
        </UiCol>

        <UiCol>
          <UiIcon name="cross-thin" />
        </UiCol>

        <UiCol>
          <UiIcon name="cross" />
        </UiCol>

        <UiCol>
          <UiIcon name="hamburger" />
        </UiCol>

        <UiCol>
          <UiIcon name="key" />
        </UiCol>

        <UiCol>
          <UiIcon name="key2" />
        </UiCol>

        <UiCol>
          <UiIcon name="lock" />
        </UiCol>

        <UiCol>
          <UiIcon name="plus" />
        </UiCol>

        <UiCol>
          <UiIcon name="user" />
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection>
      <UiHeading>
        Special
      </UiHeading>

      <UiRow :class="$style.iconGroupSpecial">
        <UiCol>
          <UiIcon name="logo" />
        </UiCol>

        <UiCol>
          <UiIcon name="pulse" />
        </UiCol>
      </UiRow>
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'PageIcons',
    data: () => ({
      fontSize: 16,
    }),
  };
</script>

<style lang="scss" module>
  .iconGroupSpecial {
    font-size: rem(48px);
  }
</style>
