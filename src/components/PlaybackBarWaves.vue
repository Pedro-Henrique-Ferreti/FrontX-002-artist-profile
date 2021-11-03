<template>
  <div class="waves">
    <div class="waves__container">
      <div
        v-for="n in 40" :key="n"
        class="waves__bar"
        :class="animate ? 'waves__bar--animated' : null"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaybackBarWaves',
  props: {
    animate: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.waves {
  width: 100%;
  max-width: clamp(100px, 45vw, 400px);
  overflow: hidden;
  height: 42px;
  margin: 0 10px;
  &__bar {
    width: 3px;
    height: 100%;
    border-radius: 8px;
    background-color: $gray-3;
    transition: background-color 1s ease-out;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    &:not(:last-child) {
      margin-right: 7px;
    }
    &:nth-child(4n+1) {
      transform: scaleY(.2);
    }
    &:nth-child(4n+2) {
      transform: scaleY(.42);
    }
    &:nth-child(4n+3) {
      transform: scaleY(.79);
    }
    &:nth-child(4n+4) {
      transform: scaleY(.52);
    }
    &--animated {
      background-color: $primary;
      &:nth-child(4n+1) {
        animation-name: normal;
      }
      &:nth-child(4n+2) {
        animation-name: quiet;
      }
      &:nth-child(4n+3) {
        animation-name: loud;
      }
      &:nth-child(4n+4) {
        animation-name: quiet;
      }
    }
  }
}
@keyframes quiet {
  25%{
    transform: scaleY(.6);
  }
  50%{
    transform: scaleY(.4);
  }
  75%{
    transform: scaleY(1);
  }
}

@keyframes normal {
  25%{
    transform: scaleY(.4);
  }
  50%{
    transform: scaleY(1);
  }
  75%{
    transform: scaleY(.6);
  }
}
@keyframes loud {
  25%{
    transform: scaleY(1);
  }
  50%{
    transform: scaleY(.4);
  }
  75%{
    transform: scaleY(1.2);
  }
}
</style>
