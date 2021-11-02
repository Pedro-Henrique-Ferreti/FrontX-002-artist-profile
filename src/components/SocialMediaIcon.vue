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
  width: 40px;
  height: 40px;
  :deep() {
    svg {
      fill: $gray-1;
      transition: fill 0.3s ease-in-out;
      &:hover, &:active {
        fill: $primary;
      }
    }
  }
}
</style>
