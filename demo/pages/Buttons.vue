<template>
  <UiMain>
    <UiSection>
      <UiHeading>
        Empty
      </UiHeading>

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

    <UiSection>
      <UiHeading>
        Styles
      </UiHeading>

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

    <UiSection>
      <UiHeading>
        Sizes
      </UiHeading>

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

    <UiSection>
      <UiHeading>
        Themes
      </UiHeading>

      <UiRow>
        <UiCol
          v-for="theme in themes"
          :key="theme"
          class="mb-4"
        >
          <UiButton :theme="theme">
            {{ theme }}
          </UiButton>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection>
      <UiHeading>
        Active
      </UiHeading>

      <UiRow>
        <UiCol
          v-for="theme in themes"
          :key="theme"
          class="mb-4"
        >
          <UiButton
            :active="true"
            :theme="theme"
          >
            {{ theme }}
          </UiButton>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection>
      <UiHeading>
        Disabled
      </UiHeading>

      <UiRow>
        <UiCol
          v-for="theme in themes"
          :key="theme"
          class="mb-4"
        >
          <UiButton
            :disabled="true"
            :theme="theme"
          >
            {{ theme }}
          </UiButton>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection>
      <UiHeading>
        With icon
      </UiHeading>

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

    <UiSection>
      <UiHeading>
        Fluid
      </UiHeading>

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

    <UiSection>
      <UiHeading>
        Buttons group
      </UiHeading>

      <UiButtonGroup class="mb-4">
        <UiButton
          v-for="index in 3"
          :key="index"
        >
          Button {{ index }}
        </UiButton>
      </UiButtonGroup>

      <UiButtonGroup
        direction="horizontal"
        class="mb-4"
      >
        <UiButton
          v-for="index in 3"
          :key="index"
          :active="index === 2"
          size="small"
          theme="info"
        >
          Button {{ index }}
        </UiButton>
      </UiButtonGroup>

      <UiButtonGroup direction="vertical">
        <UiButton
          v-for="index in 3"
          :key="index"
        >
          Button {{ index }}
        </UiButton>
      </UiButtonGroup>
    </UiSection>

    <UiSection>
      <UiHeading>
        Button hamburger
      </UiHeading>

      <UiRow>
        <UiCol>
          <UiButtonHamburger
            v-model="hamburgerState"
            :circle="true"
            size="small"
            theme="danger"
          />
        </UiCol>

        <UiCol>
          <UiButtonHamburger
            v-model="hamburgerState"
            :circle="true"
          />
        </UiCol>

        <UiCol>
          <UiButtonHamburger
            v-model="hamburgerState"
            :circle="true"
            size="large"
            theme="dark"
          />
        </UiCol>
      </UiRow>
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'PageButtons',
    data: () => ({
      themes: [
        'primary',
        'secondary',
        'info',
        'warning',
        'success',
        'danger',
        'dark',
        'light',
        'silent',
        'link',
      ],
      hamburgerState: false,
    }),
  };
</script>
