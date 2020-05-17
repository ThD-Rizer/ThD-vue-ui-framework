<template>
  <UiMain>
    <UiSection title="Empty">
      <UiRow>
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

        <UiCol>
          <UiButton
            :empty="true"
            :round="true"
            size="large"
          />
        </UiCol>

        <UiCol>
          <UiButton
            :empty="true"
            :round="true"
            size="medium"
          />
        </UiCol>

        <UiCol>
          <UiButton
            :empty="true"
            :round="true"
            size="small"
          />
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Styles">
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
          <UiButton :square="true">
            Square
          </UiButton>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Sizes">
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

    <UiSection title="Themes">
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

        <UiCol class="mb-4">
          <UiButton theme="link">
            Link
          </UiButton>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="States">
      <UiRow>
        <UiCol>
          <UiButton :active="true">
            Active
          </UiButton>
        </UiCol>

        <UiCol>
          <UiButton :disabled="true">
            Disabled
          </UiButton>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="With icon">
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
            :square="true"
            :hasIcon="true"
            size="large"
          >
            <UiIcon name="hamburger" />
          </UiButton>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Fluid">
      <UiButton
        :fluid="true"
        class="mb-4"
      >
        Fluid
      </UiButton>

      <UiButton
        :fluid="true"
        contentAlign="left"
        class="mb-4"
      >
        Button content align left
      </UiButton>

      <UiButton
        :fluid="true"
        contentAlign="right"
        class="mb-4"
      >
        Button content align right
      </UiButton>

      <UiButton
        :fluid="true"
        contentAlign="justify"
        class="mb-4"
      >
        Button content align justify
        <UiIcon name="user" />
      </UiButton>
    </UiSection>

    <UiSection title="Buttons group">
      <UiButtonGroup>
        <UiButton
          v-for="index in 3"
          :key="index"
        >
          Button {{ index }}
        </UiButton>
      </UiButtonGroup>
    </UiSection>

    <UiSection>
      <UiButtonGroup
        size="small"
        theme="info"
      >
        <UiButton
          v-for="index in 3"
          :key="index"
          :active="index === 2"
        >
          Button {{ index }}
        </UiButton>
      </UiButtonGroup>
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'ButtonsPage',
  };
</script>
