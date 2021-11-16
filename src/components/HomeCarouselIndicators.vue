<template>
  <ul class="carousel-indicators">
    <li v-for="n in slides" :key="n"
      class="carousel-indicators__indicator"
      :class="{ 'carousel-indicators__indicator--active': n === active }"
    >
      <button type="button" class="carousel-indicators__indicator__button" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'HomeCarouselIndicators',
  props: {
    slides: {
      type: Number,
      required: true,
    },
    active: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-indicators {
  flex-direction: column;
  margin-right: 20px;
  &__indicator {
    height: 12px;
    position: relative;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
    &--active {
      .carousel-indicators__indicator__button {
        background-color: $primary;
        height: 24px;
        border-radius: 8px;
      }
    }
    &__button {
      background-color: $gray-3;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      cursor: pointer;
      transition: all .5s ease-in-out;
    }
  }
}
</style>
