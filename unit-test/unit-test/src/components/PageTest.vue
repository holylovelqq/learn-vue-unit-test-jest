<template>
  <div>
    <p v-for="item in items" :key="item">{{ item }}</p>
  </div>
</template>
<script>
export default {
  name: "page-test",
  // props: ["items"],
  data() {
    return {
      items: ["first", "second"]
    };
  }
};
</script>
<style scoped>
</style>
