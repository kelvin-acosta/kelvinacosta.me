<template>
  <div class="content-container">
    <h3>Things I've worked on.</h3>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../scss/imports';

.content-container {
  margin: 0 auto;
  max-width: 700px;
  font-size: 28px;
  height: 400px;
  background-color: $white;

  h3 {
    color: $primary;
  }

  p {
    width: 475px;
    margin: 0 auto;
    font-size: 0.8em;
    font-weight: 300;
  }
}
</style>
