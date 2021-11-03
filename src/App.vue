<template>
  <BaseContainer class="background-picture" :padding="false">
    <div class="overlay">
      <Home />
    </div>
  </BaseContainer>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

body {
  background-image: url('/images/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: $purple-1;
}
.background-picture {
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  background-image: url('/images/ariana-grande-picture.png');
  background-repeat: no-repeat;
  background-size: clamp(400px, 57vh, 600px);
  background-position-x: center;
  background-position-y: bottom;
  @media (min-width: $desktop-up) {
    background-position-x: right;
    background-size: clamp(550px, 75vh, 75vh);
  }
}
</style>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
  background-image: url('/images/background-gradient.svg');
  background-repeat: no-repeat;
  background-size: cover;  
}
</style>
