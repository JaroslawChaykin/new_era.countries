<template>
  <div class="filter">
    <select name="region" id="region" v-model="currentRegion">
      <option v-for="region in regions" :key="region" :value="region">{{ region }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'TheFilter',
  data() {
    return {
      regions: ['All', 'Asia', 'Americas', 'Europe', 'Oceania', 'Africa', 'Antarctic'],
      currentRegion: 'All'
    };
  },
  watch: {
    currentRegion() {
      this.$store.commit('setFilter', this.currentRegion);
    }
  }
};
</script>

<style scoped>
select {
  width: 200px;
  padding: 15px 25px;
  background: var(--accent-color);
  color: var(--main-text-color);
  box-shadow: var(--shadow);
  border: none;
  border-radius: 6px;
  font-weight: 600;
}
</style>