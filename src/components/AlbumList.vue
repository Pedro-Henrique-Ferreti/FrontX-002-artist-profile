<template>
  <div class="album-list">
    <p class="album-list__title">{{ title }}</p>
    <ul class="album-list__items-wrapper">
      <li class="album-list__item" v-for="item in list" :key="item.id">
        <img
          class="album-list__item__picture"
          :src="require(`@/assets/images/albums/${item.image}`)" alt="album" />
        <div class="album-list__item__info-wrapper">
          <span class="album-list__item__name">{{ item.name }}</span>
          <span class="album-list__item__released-year">{{ item.releaseYear }}</span>
          <span v-if="item.hasExplictContent"
          class="album-list__item__explict-icon">E</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AlbumList',
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.album-list {
  flex-direction: column;
  &__title {
    font-weight: $font-bold;
    font-size: 16px;
    margin-bottom: 18px;
    @include font-Cairo;
    @media (min-width: $tablet-landscape-up) {
      font-size: 22px;
    }
  }
  &__items-wrapper {
    gap: 8px;
    @media (min-width: $tablet-landscape-up) {
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