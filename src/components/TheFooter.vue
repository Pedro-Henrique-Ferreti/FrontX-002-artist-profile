<template>
  <div class="footer__wrapper">
    <BaseContainer class="footer">
      <p class="footer__copyright">FrontX 2021® | All rights reserved.</p>
      <PlaybackBar />
    </BaseContainer>
  </div>
</template>

<script>
import PlaybackBar from '@/components/PlaybackBar.vue';

export default {
  name: 'TheFooter',
  components: {
    PlaybackBar,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  &__wrapper {
    position: relative;
    justify-content: center;
    margin-top: auto;
  }
  position: absolute;
  bottom: 50px;
  flex-direction: row !important;
  align-items: flex-end;
  justify-content: center;
  &__copyright {
    display: none;
  }
  @media (min-width: $desktop-up) {
    justify-content: space-between;
    &__copyright {
      display: flex;
    }
  }
}
</style>
