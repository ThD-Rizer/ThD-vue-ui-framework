<template>
  <UiMain>
    <UiInput
      v-model="inputValue"
      label="Label"
    />
  </UiMain>
</template>

<script>
  export default {
    name: 'FormsPage',
    data: () => ({
      inputValue: 'test',
    }),
  };
</script>
