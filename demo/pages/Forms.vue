<template>
  <UiMain>
    <UiSection>
      <UiHeading>
        Inputs
      </UiHeading>

      <p>
        inputValue: {{ inputValue }}
      </p>

      <div class="mb-6">
        <UiHeading type="h3">
          Default
        </UiHeading>

        <UiInput v-model="inputValue" />
      </div>

      <UiRow class="mb-6">
        <UiCol xs="3">
          <UiHeading type="h3">
            Placeholder
          </UiHeading>

          <UiInput
            placeholder="Placeholder"
            class="pt-3"
          />
        </UiCol>

        <UiCol xs="3">
          <UiHeading type="h3">
            Clearable
          </UiHeading>

          <UiInput
            v-model="inputValue"
            :clearable="true"
            class="pt-3"
          />
        </UiCol>

        <UiCol xs="3">
          <UiHeading type="h3">
            Icon after
          </UiHeading>

          <UiInput
            v-model="inputValue"
            iconBefore="user"
            class="pt-3"
          />
        </UiCol>

        <UiCol xs="3">
          <UiHeading type="h3">
            Label
          </UiHeading>

          <UiInput
            v-model="inputValue"
            label="Label"
          />
        </UiCol>
      </UiRow>

      <UiHeading type="h3">
        Mixed
      </UiHeading>

      <UiRow class="mb-6">
        <UiCol xs="4">
          <UiInput
            v-model="inputValue"
            :clearable="true"
            label="Label"
            iconBefore="user"
          />
        </UiCol>
      </UiRow>

      <UiRow class="mb-6">
        <UiCol xs="3">
          <UiHeading type="h3">
            Read only
          </UiHeading>

          <UiInput
            v-model="inputValue"
            :readOnly="true"
          />
        </UiCol>

        <UiCol xs="3">
          <UiHeading type="h3">
            Disabled
          </UiHeading>

          <UiInput
            v-model="inputValue"
            :disabled="true"
          />
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection>
      <UiHeading>
        Textareas
      </UiHeading>

      <p>
        textareaValue: {{ textareaValue }}
      </p>

      <UiTextarea
        v-model="textareaValue"
        label="Label"
      />
    </UiSection>

    <UiSection>
      <UiHeading>
        Checkboxes
      </UiHeading>

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
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'PageForms',
    data: () => ({
      inputValue: 'test',
      textareaValue: 'test',
      checkboxValue: true,
    }),
  };
</script>
