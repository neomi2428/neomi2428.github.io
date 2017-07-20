<template>
  <div id="home-page">
    <div id="scheduleListWrapper">
      <!-- TODO: Make a SmallButton component, Use @import for a button style -->
      <button @click="createSchedule" class="red-botton">CREATE</button>
      <!-- TODO: config url and stage information -->
      <form id="scheduleForm" method="post" action="https://hg7cg5r9b6.execute-api.us-west-2.amazonaws.com/dev/schedules">
        <input type="text" placeholder="Address">
        <input type="submit" value="Submit">
      </form>
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
      document.getElementById('scheduleForm').style.display = 'block'
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

#scheduleForm
  display: none

</style>
