<template>
  <div class="error">
    <h1>Not found</h1>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};
</script>

<style scoped>
.error {
  width: 100%;
  height: calc(100vh - 74px);
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  color: var(--main-text-color);
  font-size: 72px;
}
</style>