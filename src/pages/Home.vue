<template>
  <TheLoader v-if="getAllCountriesLoading" />
  <CountriesList v-else />
</template>

<script>
import CountriesList from '@/components/CountriesList';
import TheLoader from '@/components/TheLoader';
import { mapGetters } from 'vuex';
export default {
  name: 'Home-page',
  components: {TheLoader, CountriesList},
  computed: mapGetters(['getAllCountriesLoading']),
  mounted() {
    this.$store.dispatch('fetchCountries')
  }
};
</script>

<style scoped>

</style>