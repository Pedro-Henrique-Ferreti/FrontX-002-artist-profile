<template>
  <BaseContainer>
    <header class="header">
      <div class="header__profile">
        <img
          class="header__profile__picture"
          src="/images/profile-ariana.png"
          alt="Foto Ariana Grande"
        />
        <div class="header__profile__info">
          <h1 class="header__profile__info__name">Ariana Grande</h1>
          <p class="header__profile__info__location">Los Angeles - CA</p>
        </div>
      </div>
      <div class="header__social-media">
        <SocialMediaIcon name="Instagram"><IconInstagram /></SocialMediaIcon>
        <SocialMediaIcon name="Twitter"><IconTwitter /></SocialMediaIcon>
        <SocialMediaIcon name="Spotify"><IconSpotify /></SocialMediaIcon>
      </div> 
    </header>
  </BaseContainer>
</template>

<script>
import SocialMediaIcon from '@/components/SocialMediaIcon.vue';
import IconInstagram from '@/assets/images/icons/Instagram.vue';
import IconTwitter from '@/assets/images/icons/Twitter.vue';
import IconSpotify from '@/assets/images/icons/Spotify.vue';

export default {
  name: 'TheHeader',
  components: {
    SocialMediaIcon,
    IconInstagram,
    IconTwitter,
    IconSpotify,
  },
};
</script>

<style lang="scss" scoped>
$desktop-header: $desktop-up;
.header {
  width: 100%;
  flex-direction: column;
  padding-top: 50px;
  max-width: 300px;
  margin: auto;
  @media (min-width: $desktop-header) {
    width: fit-content;
    max-width: unset;
    margin: 0;
  }
  &__profile {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 375px) {
      padding: 0 10px;
    }
    @media (min-width: $desktop-header) {
      justify-content: initial;
      padding: 0;
    }
    &__picture {
      width: 110px;
      height: 110px;
      border: 5px solid $white;
      border-radius: 50%;
      margin-right: 20px;
      @media (min-width: $desktop-header) {
        width: 220px;
        height: 220px;
        margin-right: 40px;
      }
    }
    &__info {
      flex-direction: column;
      align-items: center;
      @media (min-width: $desktop-header) {
        align-items: flex-start;
      }
      &__name {
        font-size: 24px;
        color: $primary;
        font-weight: $font-bold;
        text-align: center;
        @media (min-width: $desktop-header) {
          font-size: 80px;
          line-height: 1.2;
        }
      }
      &__location {
        color: $gray-4;
        margin-top: 8px;
        text-align: center;
        @media (min-width: $desktop-header) {
          font-size: 40px;
          font-weight: $font-semibold;
          margin-top: 0;
        }
      }
    }
  }
  &__social-media {
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 47px;
    @media (min-width: $desktop-header) {
      margin-top: -20px;
      gap: 80px;
    }
  }
}
</style>
