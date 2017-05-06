<template>
  <div id="app">
    <div class="ss">
      <router-view></router-view>
    </div>
    <footer>
      <div><img src="../static/images/btn_home.png"></div>
      <div><img src="../static/images/btn_fenlei.png"></div>
      <div><img src="../static/images/btn_faxian.png"></div>
      <div><img src="../static/images/btn_mine.png"></div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body,html,#app{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
body{
  font-size: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: #42b983;
}
.ss{
  height: 94%;
  overflow: auto;
}
footer{
  width: 100%;
  height: 6%;
  font-size: 4em;
  background: #fff;
  overflow: hidden;
}
footer>div{
  width: 25%;
  height: 2em;
  margin: 0;
  padding: 0;
  border:0;
  float: left;
}
footer>div>img{
  display: block;
  width: 40%;
  height: 90%;
  margin:5% auto;

}
</style>
