<template>
  <div>
    <h1>{{ msg }}</h1>
    <button id="btn" @click="changeMessage"> Change message</button>
  </div>
</template>
<script>
export default {
  name: 'change-message',
  data () {
    return {
      msg: 'true'
    }
  },
  methods: {
    changeMessage () {
      this.msg = this.msg === 'true' ? 'false' : 'true'
    }
  }
}
</script>
<style scoped>
</style>
