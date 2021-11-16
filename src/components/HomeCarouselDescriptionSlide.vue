<template>
  <BaseContainer class="description-slide">
    <p class="description-slide__description">
      Cantora, atriz, compositora e apresentadora estadunidense. Em oito anos de carreira solo, venci dois Grammy Awards (Sweetener e Rain On Me). Não sou ariana, e nem grande.
    </p>
  </BaseContainer>
</template>

<script>
export default {
  name: 'HomeCarouselDescriptionSlide',
};
</script>

<style lang="scss" scoped>
.description-slide {
  padding-left: 0 !important;
  max-width: 600px !important;
  &__description {
    line-height: normal;
    @media (min-width: $desktop-up) {
      font-size: 28px;
    }
  }
}
</style>