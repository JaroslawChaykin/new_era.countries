<template>
  <div class="back">
    <button class="shadow-elements" @click.stop="callback">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'TheButton',
  props: ['text', 'callback']
};
</script>

<style scoped>
button {
  padding: 5px 30px;
  background: var(--accent-color);
  color: var(--main-text-color);
  border-radius: 6px;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow);
}
</style>