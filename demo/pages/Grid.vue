<template>
  <UiMain>
    <UiSection title="By content">
      <UiRow>
        <UiCol>
          <div :class="[$style.col, 'mb-3']">
            Column width by content
          </div>
        </UiCol>

        <UiCol>
          <div :class="[$style.col, 'mb-3']">
            Column width by long long loooooooooong content
          </div>
        </UiCol>

        <UiCol>
          <div :class="[$style.col, 'mb-3']">
            Column width by very very very loooooooooong loooooooooong loooooooooong content
          </div>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Size">
      <UiRow
        v-for="index in 12"
        :key="index"
        class="mb-3"
      >
        <UiCol :xs="index">
          <div :class="$style.col">
            Col {{ index }}
          </div>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection>
      <UiRow class="mb-3">
        <UiCol
          v-for="index in 12"
          :key="index"
          xs="1"
        >
          <div :class="$style.col">
            Col 1
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
            Col 2
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
            Col 3
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
            Col 4
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
            Col 6
          </div>
        </UiCol>
      </UiRow>

      <UiRow class="mb-3">
        <UiCol xs="12">
          <div :class="$style.col">
            Col 12
          </div>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Offset">
      <UiRow
        v-for="index in 11"
        :key="index"
        class="mb-3"
      >
        <UiCol
          :xs="index"
          :xsOffset="12 - index"
          class="t-right"
        >
          <div :class="$style.col">
            Col {{ index }}
          </div>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Offset right">
      <UiRow
        v-for="index in 10"
        :key="index"
        class="mb-3"
      >
        <UiCol
          :xsOffsetRight="index"
          xs="1"
        >
          <div :class="$style.col">
            Col {{ index }}
          </div>
        </UiCol>

        <UiCol xs="1">
          <div :class="$style.col">
            Col {{ index }}
          </div>
        </UiCol>
      </UiRow>
    </UiSection>

    <UiSection title="Fluid">
      <UiRow class="mb-3">
        <UiCol xs="fluid">
          <div :class="$style.col">
            Permanent fluid
          </div>
        </UiCol>
      </UiRow>

      <UiRow class="mb-3">
        <UiCol sm="fluid">
          <div :class="$style.col">
            Fluid sm
          </div>
        </UiCol>
      </UiRow>

      <UiRow class="mb-3">
        <UiCol md="fluid">
          <div :class="$style.col">
            Fluid md
          </div>
        </UiCol>
      </UiRow>

      <UiRow class="mb-3">
        <UiCol lg="fluid">
          <div :class="$style.col">
            Fluid lg
          </div>
        </UiCol>
      </UiRow>

      <UiRow class="mb-3">
        <UiCol xl="fluid">
          <div :class="$style.col">
            Fluid xl
          </div>
        </UiCol>
      </UiRow>
    </UiSection>
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
