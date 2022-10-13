<template>
  <div class="countries-list">
    <CountryCard v-for="country in getSearchedCountries"
                 :key="country.cca3"
                 :country="country" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CountryCard from '@/components/CountryCard';

export default {
  name: 'CountriesList',
  components: {CountryCard},
  computed: mapGetters(['getSearchedCountries', 'currentTheme'])
};
</script>

<style scoped>
.countries-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 50px 0;
  row-gap: 25px;
}

</style>