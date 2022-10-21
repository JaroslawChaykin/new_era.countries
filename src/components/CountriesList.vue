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
  /*grid-template-columns: repeat(4, 1fr);*/
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 50px 0;
  row-gap: 25px;
  column-gap: 50px;
}
.countries-list a {
  animation: 0.5s move ease-in-out;
}
@keyframes move {
  from {
    opacity: 0;
    transform: scale(0.09) rotate3d(0.4, 0.5, 0.1, 45deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate3d(0, 0, 0, 0deg);
  }
}
</style>