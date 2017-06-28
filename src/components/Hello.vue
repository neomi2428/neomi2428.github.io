<template>
  <div class="hello">
    <message>Hello There</message>
    <message>Hello There Again</message>
  </div>
</template>

<script>

import Message from './Message.vue'

export default {
  name: 'hello',
  components: { Message },
  data () {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
