<template>
  <div class="album-list">
    <p class="album-list__title">Lorem ipsum</p>
    <ul class="album-list__container">
      <li class="album-list__item">
        <img src="" alt="" />
        <div class="album-list__item__info">
          
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
  &__container {

  }
}
</style>