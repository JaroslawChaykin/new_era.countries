<template>
  <section class="main"
           :class="theme">
    <button @click="toggleTheme">Change theme</button>
    <h1>hi</h1>
    <nav>
      <router-link to="/">Go to Home</router-link>
    </nav>
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      theme: 'dark'
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'white' : 'dark';
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

button {
  font-size: 72px;
  text-transform: uppercase;
  font-weight: 800;
  background: var(--main-text-color);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'NunitoSans', sans-serif, Arial;
  font-size: 14px;
  transition: 0.2s ease-in-out;
}
</style>
