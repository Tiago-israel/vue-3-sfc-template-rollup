<template>
  <h1 class="title">olá mundo {{ name }}</h1>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    name: "Tiago",
  }),
  async mounted() {
    console.log("ola 2");
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: red;
}
</style>