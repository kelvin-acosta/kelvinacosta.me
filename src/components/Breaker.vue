<template>
  <div class="content-container">
    <div class="breaker">
      <div class="row">
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../scss/imports';

.content-container {
  padding-top: 40px;

  .breaker {
    margin: 0 auto;
    max-width: 100px;

    .row {
      margin-left: -15px;
      margin-right: -15px;

      .line {
        background-image: url(../assets/line-bg@2x.png);
        background-size: auto 6px;
        height: 6px;
        width: 100%;
      }
    }
  }
}
</style>
