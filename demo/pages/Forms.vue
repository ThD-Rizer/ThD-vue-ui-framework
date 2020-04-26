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
    name: 'Forms',
    data: () => ({
      inputValue: 'test',
    }),
  };
</script>
