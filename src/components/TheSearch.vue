<template>
  <div class="search">
    <input type="text" v-model="value" placeholder="Search for a country...">
  </div>
</template>

<script>
export default {
  name: 'TheSearch',
  data() {
    return {
      value: ''
    };
  },
  watch: {
    value() {
      this.$store.commit('setSearch', this.value);
    }
  }
};
</script>

<style scoped>
input {
  width: 400px;
  padding: 15px 25px;
  background: var(--accent-color);
  color: var(--main-text-color);
  box-shadow: var(--shadow);
  border: none;
  border-radius: 6px;
  font-weight: 600;
}
input::placeholder {
  color: var(--main-text-color);
}
</style>