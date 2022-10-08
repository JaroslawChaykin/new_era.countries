<template>
  <nav>
    <router-link to="/">Go to Home</router-link>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style>
@import './assets/fonts/fonts.css';
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'NunitoSans', sans-serif, Arial;
}
</style>
