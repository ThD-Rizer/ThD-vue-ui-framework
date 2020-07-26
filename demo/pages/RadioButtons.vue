<template>
  <UiMain>
    <UiSection>
      <div class="mb-6">
        <UiText
          :block="true"
          color="dustyGray"
          class="mb-3"
        >
          radioGroupValue: {{ radioGroupValue }}
        </UiText>

        <UiButton @click="radioGroupValue = null">
          Clear
        </UiButton>
      </div>

      <UiHeading type="h3">
        Horizontal
      </UiHeading>

      <UiRadioGroup
        v-model="radioGroupValue"
        direction="horizontal"
        class="mb-4"
      >
        <UiRadio
          v-for="item in inputGroup"
          :key="item"
          :value="item"
        >
          {{ item }}
        </UiRadio>
      </UiRadioGroup>

      <UiHeading type="h3">
        Vertical
      </UiHeading>

      <UiRadioGroup direction="vertical">
        <UiRadio
          v-for="item in inputGroup"
          :key="item"
          v-model="radioGroupValue"
          :value="item"
        >
          {{ item }}
        </UiRadio>
      </UiRadioGroup>
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'PageRadioButtons',
    data: () => ({
      inputGroup: ['Yes', 'No', 'Maybe'],
      radioValue: 'no',
      radioGroupValue: 'no',
    }),
  };
</script>
