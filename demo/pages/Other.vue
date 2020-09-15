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

    <UiSection :class="$style.section">
      <UiHeading>
        Suspense default slots
      </UiHeading>

      <UiSuspense :state="suspenseState" />
    </UiSection>

    <UiSection :class="$style.section">
      <UiHeading>
        Suspense custom slots
      </UiHeading>

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

    <UiSection :class="$style.section">
      <UiHeading>
        Suspense failed usage
      </UiHeading>

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

    <UiSection>
      <UiHeading>
        Elevation cards
      </UiHeading>

      <article
        v-for="index in 24"
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
  import { Logger, LogModel } from '@/utils/logger';

  const logger = new Logger({
    scope: 'PageOther',
  });

  export default {
    name: 'PageOther',
    data: () => ({
      suspenseState: null,
    }),
    mounted() {
      const model = new LogModel({
        heading: 'methodName()',
        message: 'Data is invalid!\nOh shit, fucking shit!',
        data: {
          id: 1,
          value: 0.5,
          name: 'Olo',
          sex: null,
          files: undefined,
          date: {
            x: 1,
            y: 2,
          },
          props: [1, 2, 3],
          check: false,
          text: 'fa fi foooo',
        },
      });

      logger.log(model);
      logger.info(model);
      logger.warn(model);
      logger.error(model);
    },
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

    @for $i from 0 through 24 {
      &_mode_#{$i} {
        @include elevation($i, $opacityMode: 'soft');
      }
    }
  }
</style>
