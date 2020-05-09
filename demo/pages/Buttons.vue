<template>
  <UiMain>
    <UiSection title="Empty button">
      <UiButton :empty="true" />
    </UiSection>

    <UiSection title="Default button">
      <UiButton>
        Button
      </UiButton>
    </UiSection>

    <UiSection title="Round button">
      <UiButton :round="true">
        Button
      </UiButton>
    </UiSection>

    <UiSection title="Squared button">
      <UiButton :squared="true">
        Button
      </UiButton>
    </UiSection>

    <UiSection title="Flat button">
      <UiButton :flat="true">
        Button
      </UiButton>
    </UiSection>

    <UiSection title="Depressed button">
      <UiButton :depressed="true">
        Button
      </UiButton>
    </UiSection>

    <UiSection title="Active button">
      <UiButton :active="true">
        Button
      </UiButton>
    </UiSection>

    <UiSection title="Disabled button">
      <UiButton :disabled="true">
        Button
      </UiButton>
    </UiSection>

    <UiSection title="Button with icon">
      <UiButton
        :circle="true"
        :hasIcon="true"
      >
        <UiIcon name="user" />
      </UiButton>
    </UiSection>

    <UiSection title="Fluid button">
      <UiButton :fluid="true">
        Button
      </UiButton>
    </UiSection>

    <UiSection title="Button content align left">
      <UiButton
        :fluid="true"
        contentAlign="left"
      >
        Button
      </UiButton>
    </UiSection>

    <UiSection title="Button content align right">
      <UiButton
        :fluid="true"
        contentAlign="right"
      >
        Button
      </UiButton>
    </UiSection>

    <UiSection title="Button content align justify">
      <UiButton
        :fluid="true"
        contentAlign="justify"
      >
        Button
        <UiIcon name="user" />
      </UiButton>
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'ButtonsPage',
  };
</script>
