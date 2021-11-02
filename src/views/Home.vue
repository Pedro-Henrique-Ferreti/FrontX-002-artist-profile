<template>
  <main class="home">
    <TheHeader />
    <TheFooter />
  </main>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss" scoped>
.home {
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  // position: relative;
}
</style>
