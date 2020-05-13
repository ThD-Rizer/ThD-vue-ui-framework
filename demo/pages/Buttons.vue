<template>
  <UiMain>
    <UiSection title="Empty button">
      <UiRow>
        <UiCol>
          <UiButton
            :empty="true"
            :round="true"
          />
        </UiCol>

        <UiCol>
          <UiButton
            :empty="true"
            size="large"
          />
        </UiCol>

        <UiCol>
          <UiButton
            :empty="true"
            size="medium"
          />
        </UiCol>

        <UiCol>
          <UiButton
            :empty="true"
            size="small"
          />
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Buttons styles">
      <UiRow>
        <UiCol class="mb-4">
          <UiButton>
            Default
          </UiButton>
        </UiCol>

        <UiCol class="mb-4">
          <UiButton :round="true">
            Round
          </UiButton>
        </UiCol>

        <UiCol class="mb-4">
          <UiButton :squared="true">
            Squared
          </UiButton>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Buttons sizes">
      <UiRow>
        <UiCol>
          <UiButton size="small">
            Small
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton size="medium">
            Medium
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton size="large">
            Large
          </UiButton>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Buttons themes">
      <UiRow>
        <UiCol class="mb-4">
          <UiButton theme="primary">
            Primary
          </UiButton>
        </UiCol>

        <UiCol class="mb-4">
          <UiButton theme="secondary">
            Secondary
          </UiButton>
        </UiCol>

        <UiCol class="mb-4">
          <UiButton theme="info">
            Info
          </UiButton>
        </UiCol>

        <UiCol class="mb-4">
          <UiButton theme="warning">
            Warning
          </UiButton>
        </UiCol>

        <UiCol class="mb-4">
          <UiButton theme="success">
            Success
          </UiButton>
        </UiCol>

        <UiCol class="mb-4">
          <UiButton theme="danger">
            Danger
          </UiButton>
        </UiCol>

        <UiCol class="mb-4">
          <UiButton theme="dark">
            Dark
          </UiButton>
        </UiCol>

        <UiCol class="mb-4">
          <UiButton theme="light">
            Light
          </UiButton>
        </UiCol>

        <UiCol class="mb-4">
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
      <UiRow>
        <UiCol>
          <UiButton
            :hasIcon="true"
            size="small"
          >
            <UiIcon name="plus" />
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton
            :circle="true"
            :hasIcon="true"
          >
            <UiIcon name="cross" />
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton
            :squared="true"
            :hasIcon="true"
            size="large"
          >
            <UiIcon name="hamburger" />
          </UiButton>
        </UiCol>
      </UiRow>
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
