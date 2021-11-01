<template>
  <div class="background">
    <h1>Front X</h1>    
  </div>
</template>

<script>
export default {
  name: 'App',
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
#app {
  background-image: url('/images/ariana-grande-picture.png');
  background-repeat: no-repeat;
  background-size: clamp(400px, 65vh, 600px);
  background-position-x: center;
  background-position-y: bottom;
  @media (min-width: $tablet-landscape-up) {
    background-position-x: right;
  }
  @media (min-width: $desktop-up) {
    background-size: clamp(550px, 75vh, 75vh);
  }
}
</style>

<style lang="scss" scoped>
.background {
  width: 100%;
  min-height: 100vh;
  flex-direction: column;
  overflow-x: hidden;
  background-image: url('/images/background-gradient.svg');
  background-repeat: no-repeat;
  background-size: cover;  
}
</style>
