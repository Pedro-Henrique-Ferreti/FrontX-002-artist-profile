<template>
  <div class="playback-bar">
    <PlaybackBarButton @click="handlePlayClick">
      <component :is="track.isPlaying ? 'IconPause' : 'IconPlay'" />
    </PlaybackBarButton>
    <div>
      <PlaybackBarButton>
        <IconPrevious />
      </PlaybackBarButton>
      <PlaybackBarButton>
        <IconNext />
      </PlaybackBarButton>
    </div>
  </div>
</template>

<script>
import PlaybackBarButton from '@/components/PlaybackBarButton.vue';
import IconPlay from '@/assets/images/icons/Play.vue';
import IconPause from '@/assets/images/icons/Pause.vue';
import IconPrevious from '@/assets/images/icons/Previous.vue';
import IconNext from '@/assets/images/icons/Next.vue';

export default {
  name: 'PlaybackBar',
  components: {
    PlaybackBarButton,
    IconPlay,
    IconPrevious,
    IconPause,
    IconNext,
  },
  data() {
    return {
      track: {
        isPlaying: false,
        song: new Audio('/audio/Pizza-Parlor-Theme-2012.mp3'),
      },
    };
  },
  methods: {
    handlePlayClick() {
      this.track.isPlaying
        ? this.pauseTrack()
        : this.playTrack();
    },
    playTrack() {
      this.track.isPlaying = true;

      this.track.song.play();

    },
    pauseTrack() {
      this.track.isPlaying = false;

      this.track.song.pause();
    },
  },
};
</script>

<style lang="scss" scoped>
.playback-bar {
  width: 100%;
  max-width: 550px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
}
</style>
