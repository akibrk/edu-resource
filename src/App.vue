<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/videos">Videos</router-link>
      <router-link class="nav-link" to="/websites">Websites</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/general";
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: $font_rale;
  text-align: center;
  color: #000f1f;
}

#nav {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  //@extend .shadow-lighter;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: $col_accent;
    }
  }

  .nav-link {
    display: block;
    padding: 0.5rem;
    text-decoration: none;
    border: 2px solid transparent;
  }
  .nav-link:hover {
    border: 2px solid $col_grey_lightest;
    border-radius: 0.2rem;
  }
}

.view {
  //background-color: #efefef;
  height: 90vh;
  overflow-y: auto;

  a {
    text-decoration: none;
    color: $col_accent;
  }
}

@media only screen and(max-width: 600px) {
  #nav {
    justify-content: center;
  }
}
</style>
