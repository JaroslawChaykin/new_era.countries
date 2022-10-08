<template>
  <div v-for="dtls in details"
       :key="dtls">
    <router-link :to="`/details/${dtls}`">{{ dtls }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home-page',
  data() {
    return {
      details: [1, 53, 63, 2, 65, 214]
    };
  }
};
</script>

<style scoped>

</style>