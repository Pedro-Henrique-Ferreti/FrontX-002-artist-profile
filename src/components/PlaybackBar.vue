<template>
  <div class="playback-bar">
    <PlaybackBarButton @click="handlePlayClick">
      <component :is="song.isPlaying ? 'IconPause' : 'IconPlay'" />
    </PlaybackBarButton>
    <div>
      <PlaybackBarButton @click="previousSong">
        <IconPrevious />
      </PlaybackBarButton>
      <PlaybackBarButton @click="nextSong">
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

import { Howl, Howler } from 'howler';

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
      song: {
        list: [
          '/audio/Santa_s-Sleigh.mp3',
          '/audio/Holiday-Lights.mp3',
          '/audio/Operation-Puffle-Stand-and-Defend.mp3',
          '/audio/Pizza-Parlor-Theme-2012.mp3',
          '/audio/Rain-On-Me.mp3',
        ],
        index: 0,
        isPlaying: false,
        duration: 0,
        howl: null,
      },
    };
  },
  mounted() {
    // this.startSong();
  },
  methods: {
    startSong() {
      if (this.song.howl) this.song.howl.stop();

      this.song.howl = new Howl({
        src: [this.song.list[this.song.index]],
        onend: this.nextSong,
        onload: () => {
          this.song.howl.play();
          this.song.duration = this.song.howl._duration;
          this.song.isPlaying = true;

          Howler.volume(0.2);          
        }
      });
    },
    handlePlayClick() {
      this.song.isPlaying
        ? this.pauseSong()
        : this.playSong();
    },
    playSong() {
      if (this.song.howl) {
        this.song.howl.play();
        this.song.isPlaying = true;
      }
      else {
        this.startSong();
      }
    },
    pauseSong() {
      this.song.howl.pause();
      this.song.isPlaying = false;
    },
    nextSong() {
      this.song.index++;

      if (this.song.index > this.song.list.length - 1) this.song.index = 0;

      this.startSong();
    },
    previousSong() {
      this.song.index--;

      if (this.song.index < 0) this.song.index = this.song.list.length - 1;

      this.startSong();
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
