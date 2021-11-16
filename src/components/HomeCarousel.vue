<template>
  <div class="carousel">
    <BaseContainer class="carousel__container">
      <HomeCarouselIndicators :slides="4" :active="active" />
    </BaseContainer>
  </div>
</template>

<script>
import HomeCarouselIndicators from '@/components/HomeCarouselIndicators.vue';

export default {
  name: 'HomeCarousel',
  components: {
    HomeCarouselIndicators,
  },
  data() {
    return {
      active: 1,
    };
  },
  mounted() {
    setTimeout(() => {
      this.active = 2;
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  margin-top: 8vh;
  @media (min-width: $desktop-up) {
    margin-top: 20vh;
    @media (max-height: 700px) {
      margin-top: 10vh;
    }
  }
  &__container {
    padding-right: 0;
    flex-direction: row !important;
  }
}
</style>