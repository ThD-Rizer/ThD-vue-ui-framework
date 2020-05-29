<template>
  <UiMain>
    <UiSection>
      <UiButton @click="switchSuspense">
        Switch suspense
      </UiButton>

      <p>
        suspenseState: "{{ suspenseState }}"
      </p>
    </UiSection>

    <UiSection
      :class="$style.section"
      title="Suspense default slots"
    >
      <UiSuspense :state="suspenseState" />
    </UiSection>

    <UiSection
      :class="$style.section"
      title="Suspense custom slots"
    >
      <UiSuspense :state="suspenseState">
        <template #default>
          <span>#default</span>
        </template>
        <template #error>
          <span>#error</span>
        </template>
        <template #fallback>
          <span>#fallback</span>
        </template>
        <template #preloader>
          <UiPreloader
            :fullBlock="true"
            background="rgba(0, 0, 0, .1)"
            theme="pulse"
          />
        </template>
      </UiSuspense>
    </UiSection>

    <UiSection
      :class="$style.section"
      title="Suspense failed usage"
    >
      <UiSuspense :state="suspenseState">
        #default
        <template #error>
          #error
        </template>
        <template #preloader>
          <UiPreloader theme="dots" />
        </template>
      </UiSuspense>
    </UiSection>

    <UiSection title="Elevation cards">
      <article
        v-for="index in 12"
        :key="index"
        :class="[$style.elevationCard, $style[`elevationCard_mode_${index}`]]"
      >
        Elevation card {{ index }}
      </article>
    </UiSection>
  </UiMain>
</template>

<script>
  import { STATE_TYPES } from '@/components/UiSuspense';

  export default {
    name: 'PageOther',
    data: () => ({
      suspenseState: null,
    }),
    methods: {
      switchSuspense() {
        switch (this.suspenseState) {
          case STATE_TYPES.PENDING:
            this.suspenseState = STATE_TYPES.FAIL;
            break;

          case STATE_TYPES.FAIL:
            this.suspenseState = STATE_TYPES.EMPTY;
            break;

          case STATE_TYPES.EMPTY:
            this.suspenseState = STATE_TYPES.SUCCESS;
            break;

          case STATE_TYPES.SUCCESS:
            this.suspenseState = null;
            break;

          case null:
          default:
            this.suspenseState = STATE_TYPES.PENDING;
        }
      },
    },
  };
</script>

<style lang="scss" module>
  .section {
    min-height: 200px;
  }

  .elevationCard {
    padding: spacer(2);
    margin-bottom: spacer(8);

    @for $i from 0 through 12 {
      &_mode_#{$i} {
        @include elevation($i, $opacityMode: 'soft');
      }
    }
  }
</style>
