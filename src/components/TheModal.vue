<template>
  <div class="region" :class="{hidden: !visible}" @click.stop="targetVisible">
    <div class="modal">
      <div class="header">
        <div class="title">Modal</div>
        <div class="back">
          <button class="shadow-elements" @click.stop="targetVisible">Закрыть</button>
        </div>
      </div>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheModal',
  props: ['visible', 'targetVisible'],
  methods: {
    run() {

    }
  }
};
</script>

<style scoped>
.region {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.56);
}
.hidden {
   display: none;
 }
.modal {
  width: 450px;
  border-radius: 25px;
  background: var(--accent-color);
  color: var(--main-text-color);
  padding: 25px 25px 100px;
}
.header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: 32px;
  font-weight: 800;
}
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