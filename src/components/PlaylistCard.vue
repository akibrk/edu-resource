<template>
  <div class="playlist-card">
    <div class="playlist-info">
      <header>
        <h3>{{playlist.title}}</h3>
      </header>
      <p>{{playlist.description}}</p>
    </div>

    <div class="playlist-videos">
      <div class="video" v-for="(video, index) in playlist.videos" :key="index">
        <iframe
          class="ytplayer"
          type="text/html"
          width="420"
          height="210"
          :src="`https://www.youtube.com/embed/${video.key}?autoplay=0`"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebCard",
  props: {
    playlist: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/general";
.playlist-card {
  margin: 1rem;
  padding: 1rem;
  border-radius: $border_rad;
  background-color: #ffffff;
  text-align: left;
  @extend .shadow-lighter;
  .playlist-info {
    margin-bottom: 1rem;
  }
  .playlist-videos {
    display: flex;
    overflow-x: scroll;
    .ytplayer {
      margin-right: 1rem;
    }
    details[open] {
      padding: 0.5em;
    }
  }

  header {
    margin-bottom: 0.5rem;
    a {
      color: #777;
    }
  }
}
</style>