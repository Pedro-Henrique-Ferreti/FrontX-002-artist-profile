<template>
  <a
    class="social-media-icon"
    href="#"
    :title="name"
    :aria-label="name"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'SocialMediaIcon',
  props: {
    name: String,
  },
};
</script>

<style lang="scss" scoped>
.social-media-icon {
  width: 60px;
  height: 60px;
  :deep() {
    svg {
      width: inherit;
      height: inherit;
      fill: $gray-1;
      transition: fill 0.3s ease-in-out;
      &:hover, &:active {
        fill: $primary;
      }
    }
  }
}
</style>
