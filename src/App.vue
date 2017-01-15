<template>
  <div id="app">
    <Navbar></Navbar>
    <Home></Home>
    <Footernav></Footernav>
  </div>
</template>

<script>
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footernav from './components/Footer'

export default {
  name: 'app',
  components: {
    Home,
    Navbar,
    Footernav
  }
}
</script>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
}
</style>
