<template>
  <UiMain>
    <UiSection title="Inputs">
      <p>
        inputValue: {{ inputValue }}
      </p>

      <UiInput
        v-model="inputValue"
        label="Label"
      />
    </UiSection>

    <UiSection title="Textareas">
      <p>
        textareaValue: {{ textareaValue }}
      </p>

      <UiTextarea
        v-model="textareaValue"
        label="Label"
      />
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'PageForms',
    data: () => ({
      inputValue: 'test',
      textareaValue: 'test',
    }),
  };
</script>
