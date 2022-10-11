<template>
  <header :class="{shadow: currentTheme === 'light'}">
    <div class="container">
      <div class="title">What in the world?</div>
      <button class="dark-mode" @click="changeTheme">
        Dark Mode
      </button>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'TheHeader',
  computed: mapGetters(['currentTheme']),
  methods: {
    changeTheme() {
      this.$store.commit('toggleTheme')
    }
  }
};
</script>

<style scoped>
header {
  background: var(--accent-color);
  color: var(--main-text-color);
  padding: 25px 0;
}
.shadow {
  box-shadow: 0 0 10px 2px hsl(0, 0%, 90%);
}
header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 24px;
  font-weight: 800;
  line-height: 1;
}
.dark-mode {
  background: none;
  border: none;
  color: var(--main-text-color);
  font-weight: 600;
  cursor: pointer;
}
</style>