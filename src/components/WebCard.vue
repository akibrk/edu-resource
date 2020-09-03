<template>
  <div class="card">
    <header>
      <h3>{{item.name}}</h3>
      <h4>
        <a :href="item.url">{{item.url}}</a>
      </h4>
    </header>
    <p>{{item.description}}</p>
  </div>
</template>

<script>
export default {
  name: "WebCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/general";
.card {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: $border_rad;
  background-color: #ffffff;
  text-align: left;
  @extend .shadow-lighter;

  header {
    margin-bottom: 0.5rem;
    a {
      color: #777;
    }
    word-wrap: wrap;
    word-break: break-all;
  }
}
</style>