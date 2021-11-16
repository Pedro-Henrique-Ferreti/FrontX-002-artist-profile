<template>
  <main class="home">
    <TheHeader />
    <HomeCarousel />
    <TheFooter />
  </main>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import HomeCarousel from '@/components/HomeCarousel.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheFooter,
    HomeCarousel,
  },
};
</script>

<style lang="scss" scoped>
.home {
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
}
</style>
