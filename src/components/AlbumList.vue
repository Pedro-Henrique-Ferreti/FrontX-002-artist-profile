<template>
  <div class="album-list">
    <p class="album-list__title">Lorem ipsum</p>
    <ul class="album-list__items-wrapper">
      <li class="album-list__item" v-for="n in 5" :key="n">
        <img
          class="album-list__item__picture"
          :src="require('@/assets/images/albums/Dangerous-Woman.png')" alt="album" />
        <div class="album-list__item__info-wrapper">
          <span class="album-list__item__name">Positions</span>
          <span class="album-list__item__released-year">2019</span>
          <span class="album-list__item__explict-icon">E</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AlbumList',
};
</script>

<style lang="scss" scoped>
.album-list {
  flex-direction: column;
  &__title {
    font-weight: $font-bold;
    font-size: 22px;
    margin-bottom: 18px;
    @include font-Cairo;
  }
  &__items-wrapper {
    gap: 8px;
    @media (min-width: $desktop-up) {
      display: grid;
      grid-template-columns: repeat(4, 200px);
      gap: 18px 8px;
    }
  }
  &__item {
    align-items: center;
    &__picture {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    &__info-wrapper {
      flex-direction: column;
      margin-left: 8px;
    }
    &__name {
      color: $primary;
      font-weight: $font-semibold;
    }
    &__released-year {
      color: $text-lighter;
    }
    &__explict-icon {
      width: fit-content;
      padding: 0 4px;
      background-color: $gray-1;
      border-radius: 3px;
      color: $black;
      font-size: 10px;
      font-weight: $font-semibold;
      text-transform: uppercase;
    }
  }
}
</style>