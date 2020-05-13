<template>
  <UiMain>
    <UiRow class="mb-3">
      <UiCol
        v-for="index in 12"
        :key="index"
        xs="1"
      >
        <div :class="$style.col">
          Col {{ index }}
        </div>
      </UiCol>
    </UiRow>

    <UiRow class="mb-3">
      <UiCol
        v-for="index in 6"
        :key="index"
        xs="2"
      >
        <div :class="$style.col">
          Col {{ index }}
        </div>
      </UiCol>
    </UiRow>

    <UiRow class="mb-3">
      <UiCol
        v-for="index in 4"
        :key="index"
        xs="3"
      >
        <div :class="$style.col">
          Col {{ index }}
        </div>
      </UiCol>
    </UiRow>

    <UiRow class="mb-3">
      <UiCol
        v-for="index in 3"
        :key="index"
        xs="4"
      >
        <div :class="$style.col">
          Col {{ index }}
        </div>
      </UiCol>
    </UiRow>

    <UiRow class="mb-3">
      <UiCol
        v-for="index in 2"
        :key="index"
        xs="6"
      >
        <div :class="$style.col">
          Col {{ index }}
        </div>
      </UiCol>
    </UiRow>

    <UiRow class="mb-3">
      <UiCol xs="12">
        <div :class="$style.col">
          Col 1
        </div>
      </UiCol>
    </UiRow>
  </UiMain>
</template>

<script>
  export default {
    name: 'GridPage',
  };
</script>


<style lang="scss" module>
  .col {
    background-color: rgba($colorEasternBlue, .5);
    padding: spacer(1) spacer(2);
    font-size: 12px;
  }
</style>
