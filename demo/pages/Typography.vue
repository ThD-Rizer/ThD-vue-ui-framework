<template>
  <UiMain>
    <UiText
      type="h1"
      weight="normal"
    >
      Headline/H0
    </UiText>
    <UiText type="h1">
      Headline/H1
    </UiText>
    <UiText type="h2">
      Headline/H2
    </UiText>
    <UiText type="h3">
      Headline/H3
    </UiText>

    <UiText
      tag="div"
      weight="thin"
    >
      Thin text
    </UiText>
    <UiText
      tag="div"
      weight="light"
    >
      Light text
    </UiText>
    <UiText tag="div">
      Regular text
    </UiText>
    <UiText
      tag="div"
      weight="medium"
    >
      Medium text
    </UiText>
    <UiText
      tag="div"
      weight="bold"
    >
      Bold text
    </UiText>
    <UiText
      tag="div"
      color="dustyGray"
    >
      Dusty gray text
    </UiText>

    <p>
      <UiLink
        :native="true"
        to="/buttons"
      >
        Link
      </UiLink>
    </p>
    <p>
      <UiLink
        :native="true"
        to="/typography"
      >
        Active link
      </UiLink>
    </p>
    <p>
      <UiLink :pseudo="true">
        Pseudo Link
      </UiLink>
    </p>
  </UiMain>
</template>

<script>
  export default {
    name: 'Typography',
  };
</script>
