<template>
  <router-link :to="`/details/${country.name.official}`">
    <div class="country-card" :class="{shadow: currentTheme === 'light'}">
      <img :src="country.flags.png" :alt="country.name.official + 'flag'" height="180">
      <div class="country-info">
        <h4 class="country-name">{{ country.name.official }}</h4>
        <div class="country-details">
          <div class="detail country-population"><span>Population: </span>{{ country.population.toLocaleString('en')
            }}</div>
          <div class="detail country-region"><span>Region: </span>{{ country.continents?.[0] }}</div>
          <div class="detail country-capital"><span>Capital: </span>{{ country.capital?.[0] }}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CountryCard',
  props: ['country'],
  computed: mapGetters(['currentTheme']),
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.country-card {
  width: 260px;
  background: var(--accent-color);
  border-radius: 5px;
  overflow: hidden;
  color: var(--main-text-color);
  cursor: pointer;
}
.shadow {
  box-shadow: 0 0 10px 2px hsl(0, 0%, 90%);
}
.country-info {
  padding: 20px;
}
h4 {
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: 800;
}
.country-details {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}
.detail {
  font-weight: 300;
}
.detail span {
  font-weight: 600;
}
img {
  display: block;
  width: 100%;
}
</style>