<template>
  <div class="home">
    <div class="filter-box">
      <TheSearch/>
      <TheFilter/>
    </div>
    <TheLoader v-if="getAllCountriesLoading"/>
    <CountriesList v-else/>
  </div>
</template>

<script>
import CountriesList from '@/components/CountriesList';
import { mapGetters } from 'vuex';
import TheLoader from '@/components/TheLoader';
import TheFilter from '@/components/TheFilter';
import TheSearch from '@/components/TheSearch';

export default {
  name: 'Home-page',
  components: {TheFilter, TheLoader, CountriesList, TheSearch},
  computed: mapGetters(['getAllCountriesLoading']),
  mounted() {
    this.$store.dispatch('fetchCountries');
  }
};
</script>

<style scoped>
.home {
  font-size: 14px;
  margin-top: 50px;
  width: 100%;
}
.filter-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>