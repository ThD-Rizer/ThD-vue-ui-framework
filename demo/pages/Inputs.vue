<template>
  <UiMain>
    <UiSection>
      <div class="mb-6">
        <UiText
          :block="true"
          color="dustyGray"
          class="mb-3"
        >
          inputValue: {{ inputValue }}
        </UiText>

        <UiButton @click="inputValue = null">
          Clear
        </UiButton>
      </div>

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
        <UiCol xs="3">
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

      <div class="mb-6">
        <UiText
          :block="true"
          color="dustyGray"
          class="mb-3"
        >
          textareaValue: {{ textareaValue }}
        </UiText>

        <UiButton @click="textareaValue = null">
          Clear
        </UiButton>
      </div>

      <UiTextarea
        v-model="textareaValue"
        label="Label"
      />
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'PageInputs',
    data: () => ({
      inputValue: 'test',
      textareaValue: 'test',
    }),
  };
</script>
