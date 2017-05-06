<template>
  <div class="admin">
    <h1>{{ msg }}</h1>
    <router-link to="/hello">Go to hello</router-link>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      msg: 'come to first admin-vue page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
