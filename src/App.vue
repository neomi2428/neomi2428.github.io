<template>

  <div id="app">
    <header>
      <h1>Enabler, Equalizer</h1>
    </header>
    <nav>
      <ul>
        <li class="tooltip">
          <router-link to="/">Calendar</router-link>
          <span class="tooltiptext">Calendar</span>
        </li>
        <li class="tooltip">
          <router-link to="/">About</router-link>
          <span class="tooltiptext">About</span>
        </li>
      </ul>
    </nav>
    <!-- <img src="./assets/logo.png"> -->
    <content>
      <router-view></router-view>
    </content>
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
