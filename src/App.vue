<template>

  <div id="app">
    <header>
      <h1>Enabler, Equalizer</h1>
    </header>
    <nav>
      <ul>
      </ul>
    </nav>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: 'app'
}

</script>

<style>

#app {
  font: 100% "Open Sans", Helvetica, sans-serif;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
