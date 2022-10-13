<template>
  <TheLoader v-if="getCountryLoading" />
  <div v-else class="details">
    <div class="back">
      <button class="shadow-elements" @click="$router.push('/')">Back</button>
    </div>
    <h1>Details</h1>
    <h5>{{getCountry.name.official}}</h5>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TheLoader from '@/components/TheLoader';

export default {
  name: 'Details-page',
  components: {TheLoader},
  computed: mapGetters(['currentTheme', 'getCountry', 'getCountryLoading']),
  mounted() {
    this.$store.dispatch('fetchCountryDetails', this.$route.params.name)
  }
};
</script>

<style scoped>
.details {
  margin-top: 50px;
}
button {
  margin-bottom: 50px;
  padding: 5px 30px;
  background: var(--accent-color);
  color: var(--main-text-color);
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
</style>