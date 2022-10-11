<template>
  <div class="details">
    <div class="back">
      <button class="shadow-elements" @click="$router.push('/')">Back</button>
    </div>
    <h1>Details</h1>
    <h5>{{$route.params.name}}</h5>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Details-page',
  computed: mapGetters(['currentTheme'])
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
}
</style>