<template>
  <div class="main-container">
    <div class="media-container">
      <h1>I'm Kelvin.</h1>
      <h3>a DevOps aficionado.</h3>
      <div class="social-media">
        <div class="logo-container">
          <a href="https://github.com/kelvin-acosta"><img src="../assets/github.svg" alt="Github"></a>
          <a href="https://www.linkedin.com/in/kelvinacosta"><img src="../assets/linkedin.svg" alt="Linkedin"></a>
          <a href="https://twitter.com/onlykelvin"><img src="../assets/twitter.svg" alt="Twitter"></a>
          <a href="https://www.instagram.com/onlykel/"><img src="../assets/instagram.svg" alt="Instagram"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Me',
  components: {
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../scss/imports';

.main-container {
  background-color: $light-green;
  width: auto;

  .media-container {
    color: $primary;
    padding-top: 80px;
    padding-bottom: 40px;
    margin: 0 auto;
    height: 600px;
    font-size: 24px;
  }

  .social-media {
    margin: 0 auto;
    width: 400px;
    height: 50px;
    line-height: 3;
    background-color: rgba(6, 8, 8, 0.15);
    border-radius: 3px;
    .logo-container {
      a {
        @include link;
        img {
          margin: 0 15px;
          width: 35px;
        }
      }
    }
  }
}
</style>
