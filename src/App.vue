<template>

  <div id="app">
    <header>
      <h1>Enabler, Equalizer</h1>
    </header>
    <nav>
      <ul>
        <li class="main-menu tooltip">
          <router-link to="/">Calendar</router-link>
          <span class="tooltiptext">Calendar</span>
        </li>
        <li class="main-menu tooltip">
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

<style lang="sass">

// TODO need to move this to another file and import the file
$font-stack: "Open Sans", Helvetica, sans-serif
$primary-color: #404040

#app
  font: 100% $font-stack
  // font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  // text-align: center
  // color: #2c3e50
  color: $primary-color
  // margin-top: 60px
  padding: 20px

// for a navigation menu
nav
  ul
    list-style-type: none
    padding: 0

    .main-menu
      display: inline
      padding: 10px

      a
        color: $primary-color
        text-decoration: none
        &:hover, &:active
          box-shadow: 0 2px 0 0 currentColor
        &:visited
          color: $primary-color
        &.router-link-exact-active
          box-shadow: 0 2px 0 0 currentColor

// for a tooltip text
.tooltip
  position: relative

  .tooltiptext
    visibility: hidden
    position: absolute
    top: 2.5rem
    left: 1rem
    z-index: 1
    font-size: 0.75rem
    background-color: #404040
    color: white
    padding: 0.5rem
    border-radius: 6px

  &:hover
    .tooltiptext
      visibility: visible

</style>
