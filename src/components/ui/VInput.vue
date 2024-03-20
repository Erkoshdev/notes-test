<template>
  <label for=""></label>
  <input type="text" :placeholder="placeholder" @input="onInput">
</template>

<script>
export default {
  name: 'VInput',

  props: {
    placeholder: String,
    modelValue: String,
  },

  methods: {
    onInput($event) {
      this.$emit('update:modelValue', $event.target.value)
    }
  }

}

</script>

<style scoped>

</style>