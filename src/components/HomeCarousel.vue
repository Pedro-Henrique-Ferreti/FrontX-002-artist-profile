<template>
  <div class="carousel">
    <BaseContainer class="carousel__container">
      <Splide class="carousel__splide" :options="carouselOptions">
        <SplideSlide class="carousel__slide">
          <DescriptionSlide />
        </SplideSlide>
        <SplideSlide>
          <AlbumList />
        </SplideSlide>
      </Splide>
    </BaseContainer>
  </div>
</template>

<script>
import DescriptionSlide from '@/components/HomeCarouselDescriptionSlide.vue';
import AlbumList from '@/components/AlbumList.vue';

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default {
  name: 'HomeCarousel',
  components: {
    DescriptionSlide,
    AlbumList,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      carouselOptions: {
        autoWidth: true,
        rewind: true,
        direction: 'ttb',
        height: '175px',
        classes: {
          arrows: 'carousel__arrows',
          pagination: 'carousel__pagination',
          page: 'carousel__pagination__item',
        },
      },
    };
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
    padding-right: 0 !important;
    @media (max-width: $desktop-up) {
      align-items: center;
    }
  }
  &__splide {
    width: fit-content;
  }
  &__slide {
    width: 100%;
  }
  ::v-deep() {
    .splide__track {
      padding-left: 32px;
      @media (min-width: $desktop-up) {
        padding-left: 70px;
      }
    }
    .carousel__arrows {
      display: none;
    }
    .carousel__pagination {
      flex-direction: column;
      position: absolute;
      li:not(:last-child) {
        margin-bottom: 24px;
        height: 12px;
        @media (min-width: $desktop-up) {
          margin-bottom: 48px;
        }
      }
      &__item {
        background-color: $gray-3;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        cursor: pointer;
        transition: all .2s ease-in-out;
        &.is-active {
          background-color: $primary;
          height: 24px;
          border-radius: 8px;
        }
      }
    }
  }
}
</style>