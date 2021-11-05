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
        <div class="playback-bar__controls__song-info">
          <span>{{ $fn.formatSecondsToMinutes(song.currentTime) }}</span>
          <div class="playback-bar__controls__song-info__name"
            :key="song.index"
          >
            <p :style="{ animationPlayState: song.isPlaying ? 'running' : 'paused' }">
              Now playing: {{ song.list[song.index].name }}
            </p>
          </div>
          <span>{{ $fn.formatSecondsToMinutes(song.duration) }}</span>
        </div>
        <PlaybackBarWaves :key="song.index" :animate="song.isPlaying" />
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
import { songList } from '@/data';

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
        list: songList,
        index: 0,
        isPlaying: false,
        duration: 0,
        currentTime: 0,
        howl: null,
      },
    };
  },
  mounted() {
    // this.startSong();
    this.addSpaceBarPressEvent();
  },
  methods: {
    startSong() {
      if (this.song.howl) this.song.howl.stop();

      this.song.howl = new Howl({
        src: [this.song.list[this.song.index].url],
        onend: this.nextSong,
        onload: () => {
          this.playSong();
          this.song.duration = this.song.howl._duration;

          Howler.volume(0.2);

          setInterval(() => this.updateSongCurrentTime(), 1000);
        }
      });
    },
    updateSongCurrentTime() {
      this.song.currentTime = this.song.howl ? this.song.howl.seek() : 0;
    },
    addSpaceBarPressEvent() {
      document.addEventListener('keypress', event => {
        if (event.code === 'Space') this.handlePlayClick();
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
    &__song-info {
      position: absolute;
      top: -30px;
      width: 100%;
      justify-content: space-between;
      span {
        color: $white;
      }
      &__name {
        width: 100%;
        margin: 0 8px;
        overflow: hidden;
        white-space: nowrap;
        p {
          color: $white;
          padding-left: 100%;
          animation: marquee 15s linear infinite;
          animation-play-state: paused;
        }
      }
    }
  }
}

@keyframes marquee {
  to {
    transform: translate(-105%, 0);
  }
}
</style>
