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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0.2rem 0.2rem #777;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #0084ac;
    }
  }

  .nav-link {
    display: block;
    padding: 0.5rem;
    text-decoration: none;
  }
  .nav-link:hover {
    background-color: #8ae4ff;
    border-radius: 0.2rem;
  }
}
</style>
