<template>
  <header>
    <div class="container">
      <div class="title">What in the world?</div>
      <button class="dark-mode">
        Dark Mode
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>

<style scoped>
header {
  background: var(--accent-color);
  color: var(--main-text-color);
  padding: 25px 0;
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