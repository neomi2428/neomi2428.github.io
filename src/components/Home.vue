<template>
  <div id="home-page">
    <div id="scheduleListWrapper">
      <!-- TODO: Make a SmallButton component, Use @import for a button style -->
      <button @click="createSchedule" class="red-botton">CREATE</button>
    </div>
    <message>Hello There</message>
    <message>Hello There Again</message>
  </div>
</template>

<script>

import Message from './Message.vue'

export default {
  name: 'home',
  components: { Message },
  data () {
    return {
    }
  },
  mounted () {
    console.log('You are in a home page.')
  },
  methods: {
    createSchedule () {
      console.log('Do you want to create a schedule?')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">

@import '../assets/style/main.sass'

#scheduleListWrapper
  border: 1px solid $primary-color
  margin: 10px 0

.red-botton
  background: #d14836
  border: none
  color: white
  cursor: pointer
  display: inline-block
  font-size: 16px
  margin: 4px 2px
  padding: 10px 20px
</style>
