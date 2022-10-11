<template>
  <section class="main" :class="theme">
    <the-header/>
    <div class="container">
      <router-view/>
    </div>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
export default {
  name: 'App',
  components: {TheHeader},
  computed: {
    theme() {
      return this.$store.getters.currentTheme
    }
  }
};
</script>

<style>
@import './assets/fonts/fonts.css';
@import './assets/colors.css';

.main {
  width: 100%;
  min-height: 100vh;
  max-height: 100%;
  background: var(--main-color);
}
.shadow-elements {
  box-shadow: var(--shadow);
}
.container {
  width: 90%;
  display: flex;
  margin: 0 auto;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'NunitoSans', sans-serif, Arial;
  font-size: 14px;
}
</style>
