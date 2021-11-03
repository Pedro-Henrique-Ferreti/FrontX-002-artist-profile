<template>
  <button class="playback-bar__button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'PlaybackBarButton',
};
</script>

<style lang="scss" scoped>
.playback-bar__button {
  background-color: transparent;
  cursor: pointer;
  width: 32px;
  height: 32px;
  :deep() {
    svg {
      width: inherit;
      height: inherit;
      stroke: $primary;
    }
  }
}
</style>
