<template>
  <CountriesList />
</template>

<script>
import CountriesList from '@/components/CountriesList';
export default {
  name: 'Home-page',
  components: {CountriesList},
  mounted() {
    this.$store.dispatch('fetchCountries')
  }
};
</script>

<style scoped>

</style>