<template>
    <div class="app-header">
        <el-menu
            class="elmenu"
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
            background-color="#333"
            text-color="#fff"
            active-text-color="#fff">
            <router-link :to="{ name: 'Incidents' }">
              <el-menu-item class="elmenuitem" index="1">Home</el-menu-item>
            </router-link>
        </el-menu>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      testKey: 1
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
      this.testKey = 5
    }
  }
}
</script>

<style>
</style>
