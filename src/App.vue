<template>
  <div class="wrapper">
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
.wrapper {
  padding: 60px 0;
}
.container {
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
h1,h2,h3,h4,h5,h6,p {
  margin: 0;
}
</style>
