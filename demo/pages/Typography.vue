<template>
  <UiMain>
    <UiSection title="Headings">
      <UiText
        type="h1"
        class="mb-4"
      >
        Headline/H1
      </UiText>

      <UiText
        type="h2"
        class="mb-4"
      >
        Headline/H2
      </UiText>

      <UiText
        type="h3"
        class="mb-4"
      >
        Headline/H3
      </UiText>

      <UiText
        type="h4"
        class="mb-4"
      >
        Headline/H4
      </UiText>

      <UiText
        type="h5"
        class="mb-4"
      >
        Headline/H5
      </UiText>
    </UiSection>

    <UiSection title="Pseudo headings">
      <UiText
        tag="div"
        type="h1"
        weight="regular"
        class="mb-4"
      >
        Headline/H1
      </UiText>

      <UiText
        tag="div"
        type="h3"
        weight="regular"
        class="mb-4"
      >
        Headline/H3
      </UiText>
    </UiSection>

    <UiSection title="Text weights">
      <UiText
        :block="true"
        weight="thin"
      >
        Thin text
      </UiText>

      <UiText
        :block="true"
        weight="light"
      >
        Light text
      </UiText>

      <UiText
        :block="true"
        weight="regular"
      >
        Regular text
      </UiText>

      <UiText
        :block="true"
        weight="medium"
      >
        Medium text
      </UiText>

      <UiText
        :block="true"
        weight="bold"
      >
        Bold text
      </UiText>
    </UiSection>

    <UiSection title="Text colors">
      <UiText
        :block="true"
        color="azureRadiance"
      >
        Dusty gray text
      </UiText>

      <UiText
        :block="true"
        color="persianRed"
      >
        Dusty gray text
      </UiText>

      <UiText
        :block="true"
        color="amber"
      >
        Dusty gray text
      </UiText>

      <UiText
        :block="true"
        color="eucalyptus"
      >
        Dusty gray text
      </UiText>

      <UiText
        :block="true"
        color="dustyGray"
      >
        Dusty gray text
      </UiText>
    </UiSection>

    <UiSection title="Links">
      <div class="mb-2">
        <UiLink
          :native="true"
          to="/buttons"
        >
          Link
        </UiLink>
      </div>

      <div class="mb-2">
        <UiLink
          :native="true"
          to="/typography"
        >
          Active link
        </UiLink>
      </div>

      <div class="mb-2">
        <UiLink :pseudo="true">
          Pseudo Link
        </UiLink>
      </div>

      <div class="mb-2">
        <UiLink
          :native="true"
          :disabled="true"
          to="/buttons"
        >
          Disabled link
        </UiLink>
      </div>
    </UiSection>
  </UiMain>
</template>

<script>
  export default {
    name: 'TypographyPage',
  };
</script>
