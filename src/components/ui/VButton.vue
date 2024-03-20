<template>
  <button class="btn" :class="[type, size]" @click="$emit('action')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    type: String,
    size: String
  },

  emits: ['action']
}

</script>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}
.btn.md {
  padding: 12px 30px;
}
.btn-danger {
  background: darkred;
  color: #fff;
}
.btn-info {
  background: blue;
  color: #fff;
}
.btn-success {
  background: green;
  color: #fff;
}
</style>