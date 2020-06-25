<template>
  <div>
    <UiHeading>
      Inputs
    </UiHeading>

    <PageInputs />

    <UiHeading>
      Checkboxes
    </UiHeading>

    <PageCheckboxes />

    <UiHeading>
      RadioButtons
    </UiHeading>

    <PageRadioButtons />
  </div>
</template>

<script>
  import PageInputs from '@demo/pages/Inputs';
  import PageCheckboxes from '@demo/pages/Checkboxes';
  import PageRadioButtons from '@demo/pages/RadioButtons';

  export default {
    name: 'PageForms',
    components: {
      PageInputs,
      PageCheckboxes,
      PageRadioButtons,
    },
  };
</script>
