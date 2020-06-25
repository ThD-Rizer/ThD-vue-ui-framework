<template>
  <UiMain>
    <UiSection>
      <div class="mb-6">
        <UiText
          :block="true"
          color="dustyGray"
          class="mb-3"
        >
          checkboxValue: {{ checkboxValue }}
        </UiText>

        <UiButton @click="checkboxValue = null">
          Clear
        </UiButton>
      </div>

      <div class="mb-6">
        <UiCheckbox
          v-model="checkboxValue"
        >
          Sed ante massa, congue et sodales vitae, egestas at augue. Nullam elementum, tellus eget lacinia maximus, felis sem tempus elit, vitae facilisis ante est eu erat.
        </UiCheckbox>
      </div>

      <UiHeading type="h3">
        Custom icons
      </UiHeading>

      <UiRow class="mb-6">
        <UiCol xs="3">
          <UiCheckbox
            v-model="checkboxValue"
          >
            Default
          </UiCheckbox>
        </UiCol>

        <UiCol xs="3">
          <UiCheckbox
            v-model="checkboxValue"
            iconName="square"
          >
            Square
          </UiCheckbox>
        </UiCol>

        <UiCol xs="3">
          <UiCheckbox
            v-model="checkboxValue"
            iconName="cross"
          >
            Cross
          </UiCheckbox>
        </UiCol>
      </UiRow>

      <UiRow class="mb-6">
        <UiCol xs="3">
          <UiHeading type="h3">
            Read only
          </UiHeading>

          <UiCheckbox
            v-model="checkboxValue"
            :readOnly="true"
          >
            In pulvinar eros eu
          </UiCheckbox>
        </UiCol>

        <UiCol xs="3">
          <UiHeading type="h3">
            Disabled
          </UiHeading>

          <UiCheckbox
            v-model="checkboxValue"
            :disabled="true"
          >
            Integer molestie
          </UiCheckbox>
        </UiCol>
      </UiRow>

      <UiHeading type="h3">
        Fluid
      </UiHeading>

      <div class="mb-6">
        <UiCheckbox
          v-model="checkboxValue"
          :fluid="true"
          class="mb-2"
        >
          Maecenas non nunc eu nunc aliquet faucibus sagittis sed quam
        </UiCheckbox>

        <UiCheckbox
          v-model="checkboxValue"
          :fluid="true"
        >
          Nam tempor sit amet eros eu lobortis
        </UiCheckbox>
      </div>
    </UiSection>

    <UiSection>
      <UiHeading type="h2">
        Groups
      </UiHeading>

      <div class="mb-6">
        <UiText
          :block="true"
          color="dustyGray"
          class="mb-3"
        >
          checkboxGroupValue: {{ checkboxGroupValue }}
        </UiText>

        <UiButton @click="checkboxGroupValue = []">
          Clear
        </UiButton>
      </div>

      <UiHeading type="h3">
        Horizontal
      </UiHeading>

      <UiCheckboxGroup
        v-model="checkboxGroupValue"
        direction="horizontal"
        class="mb-4"
      >
        <UiCheckbox
          v-for="item in inputGroup"
          :key="item"
          :value="item"
        >
          {{ item }}
        </UiCheckbox>
      </UiCheckboxGroup>

      <UiHeading type="h3">
        Vertical
      </UiHeading>

      <UiCheckboxGroup direction="vertical">
        <UiCheckbox
          v-for="item in inputGroup"
          :key="item"
          :value="item"
        >
          {{ item }}
        </UiCheckbox>
      </UiCheckboxGroup>
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'PageCheckboxes',
    data: () => ({
      inputGroup: ['Yes', 'No', 'Maybe'],
      checkboxValue: true,
      checkboxGroupValue: [],
    }),
  };
</script>
