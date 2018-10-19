<template>
  <input type="text" @keydown.prevent="onkeydown" v-model="quantity"/>
</template>
<script>
// const KeyDown = 40
// const KeyUp = 38
const Escape = 27
const CharA = 65

export default {
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    increment () {
      this.quantity += 1
    },
    decrement () {
      this.quantity -= 1
    },
    clear () {
      this.quantity = 0
    },
    onkeydown (e) {
      const val = e.keyCode
      switch (val) {
        case 40:
          this.decrement()
          break
        case 38:
          this.increment()
          break
        case Escape:
          this.clear()
          break
        case CharA:
          this.quantity = 13
          break
        default:
          break
      }
    }
  },
  watch: {},
  computed: {},
  created () {},
  mounted () {}
}
</script>
<style scoped>
</style>
