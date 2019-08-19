<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li{
  list-style: none;
}

html{
  -webkit-text-size-adjust:100%;
  -ms-text-size-adjust:100%;
  font-size:12px;
  width:100%;
  height:100%;
  background: #fff;
}

body{
  max-width: 640px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  background: #f2f2f2;
  text-align: left;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
