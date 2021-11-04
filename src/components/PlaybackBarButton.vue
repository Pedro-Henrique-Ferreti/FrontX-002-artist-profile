<template>
  <button
    class="playback-bar__button"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'PlaybackBarButton',
  props: {
    color: {
      type: String,
      default: 'primary',
      validator(color) {
        return ['primary', 'gray'].indexOf(color) > -1;
      },
    },
  },
  computed: {
    buttonClasses() {
      return {
        'playback-bar__button--primary': this.color === 'primary',
        'playback-bar__button--gray': this.color === 'gray',
      };
    },
  },
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
      transition: stroke 0.2s ease-in-out;
    }
  }
  &--primary {
    :deep() {
      svg {
        stroke: $primary;
      }
    }
  }
  &--gray {
    :deep() {
      svg {
        stroke: $gray-3;
        &:hover {
          stroke: $primary;
        }
      }
    }
  }
}
</style>
