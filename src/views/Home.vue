<template>
  <div class="home view">
    <h1>Edu Resources</h1>
    <h4>Curated collection of links</h4>
    <p>
      Something is wrong? Like to add something?
      <br />Create a request
      <a href="https://github.com/akibrezakhan/edu-resource">here</a>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/general";
.view {
  //background-color: #ffffff;
  text-align: left;
  padding: 1rem;
  color: #444;

  p {
    margin-top: 0.5rem;
  }
}
</style>