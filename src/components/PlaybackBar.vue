<template>
  <div class="playback-bar">
    <PlaybackBarButton
      :title="song.isPlaying ? 'Pausar' : 'Tocar'"
      :aria-label="song.isPlaying ? 'Pausar Música' : 'Tocar Música'"
      @click="handlePlayClick"
    >
      <component :is="song.isPlaying ? 'IconPause' : 'IconPlay'" />
    </PlaybackBarButton>
    <div class="playback-bar__controls">
      <PlaybackBarButton
        color="gray"
        title="Música anterior"
        aria-label="Música Anterior"
        @click="previousSong"
      >
        <IconPrevious />
      </PlaybackBarButton>
      <div class="playback-bar__controls__waves-wrapper">
        <div class="playback-bar__controls__duration">
          <span>{{ $fn.formatSecondsToMinutes(currentTime) }}</span>
          <span>{{ $fn.formatSecondsToMinutes(song.duration) }}</span>
        </div>
        <PlaybackBarWaves :animate="song.isPlaying && song.showTrackAnimation" />
      </div>
      <PlaybackBarButton
        color="gray"
        title="Próxima música"
        aria-label="Próxima Música"
        @click="nextSong"
      >
        <IconNext />
      </PlaybackBarButton>
    </div>
  </div>
</template>

<script>
import PlaybackBarButton from '@/components/PlaybackBarButton.vue';
import PlaybackBarWaves from '@/components/PlaybackBarWaves.vue';
import IconPlay from '@/assets/images/icons/Play.vue';
import IconPause from '@/assets/images/icons/Pause.vue';
import IconPrevious from '@/assets/images/icons/Previous.vue';
import IconNext from '@/assets/images/icons/Next.vue';

import { Howl, Howler } from 'howler';

export default {
  name: 'PlaybackBar',
  components: {
    PlaybackBarButton,
    PlaybackBarWaves,
    IconPlay,
    IconPrevious,
    IconPause,
    IconNext,
  },
  data() {
    return {
      song: {
        list: [
          '/audio/Rain-On-Me.mp3',
          '/audio/Santa_s-Sleigh.mp3',
          '/audio/Holiday-Lights.mp3',
          '/audio/Operation-Puffle-Stand-and-Defend.mp3',
          '/audio/Pizza-Parlor-Theme-2012.mp3',
        ],
        index: 0,
        isPlaying: false,
        showTrackAnimation: true,
        duration: 0,
        howl: null,
      },
    };
  },
  computed: {
    currentTime() {
      return this.song.howl ? this.song.howl.seek() : 0;
    }
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
          this.song.showTrackAnimation = true;

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
      this.song.showTrackAnimation = false;
      this.song.index++;

      if (this.song.index > this.song.list.length - 1) this.song.index = 0;

      this.startSong();
    },
    previousSong() {
      this.song.showTrackAnimation = false;
      this.song.index--;

      if (this.song.index < 0) this.song.index = this.song.list.length - 1;

      this.startSong();
    },
  },
};
</script>

<style lang="scss" scoped>
.playback-bar {
  max-width: 550px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  align-items: center;
  &__controls {
    align-items: center;
    &__waves-wrapper {
      position: relative;
      flex-direction: column;
      width: 100%;
    }
    &__duration {
      position: absolute;
      top: -30px;
      width: 100%;
      justify-content: space-between;
      span {
        color: $white;
      }
    }
  }
}
</style>
