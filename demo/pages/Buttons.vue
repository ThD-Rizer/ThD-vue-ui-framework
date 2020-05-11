<template>
  <UiMain>
    <UiSection title="Empty button">
      <UiRow>
        <UiCol>
          <UiButton :empty="true" />
        </UiCol>

        <UiCol>
          <UiButton
            :empty="true"
            :round="true"
          />
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Buttons styles">
      <UiRow>
        <UiCol>
          <UiButton>
            Default
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton :round="true">
            Round
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton :squared="true">
            Squared
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton :flat="true">
            Flat
          </UiButton>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Buttons themes">
      <UiRow>
        <UiCol>
          <UiButton theme="primary">
            Primary
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton theme="secondary">
            Secondary
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton theme="info">
            Info
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton theme="warning">
            Warning
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton theme="success">
            Success
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton theme="danger">
            Danger
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton theme="dark">
            Dark
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton theme="light">
            Light
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton theme="silent">
            Silent
          </UiButton>
        </UiCol>
      </UiRow>
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
