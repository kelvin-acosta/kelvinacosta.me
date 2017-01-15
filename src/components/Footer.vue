<template>
  <div class="content-container">
    <div class="contact-container">
      <h5>Contact</h5>
      <ul>
        <li><a href="mailto:kelvin.acosta@alumni.stonybrook.edu?Subject=Hello" target="_top">kelvin.acosta@alumni.stonybrook.edu</a></li>
        <li><br></li>
        <li><br></li>
        <li>New York City</li>
      </ul>
    </div>
    <div class="nav-container">
      <h5>Navigation</h5>
      <ul>
        <li><router-link to="#about">About</router-link></li>
        <li><router-link to="#work">Work</router-link></li>
        <li><router-link to="#skills">Skills</router-link></li>
        <li><router-link to="#projects">Projects</router-link></li>
      </ul>
    </div>
    <div class="social-media-container">
      <h5>Social Media</h5>
      <ul>
        <li><a href="https://github.com/kelvin-acosta">Github</a></li>
        <li><a href="https://www.linkedin.com/in/kelvinacosta">LinkedIn</a></li>
        <li><a href="https://twitter.com/onlykelvin">Twitter</a></li>
        <li><a href="https://www.instagram.com/onlykel/">Instagram</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../scss/imports';

.content-container {
  width: 100%;
  margin: 0 auto;
  height: 160px;
  background-color: $footer-color;

  ul {
    padding-left: 0;
    margin-top: 0;
    li {
      list-style-type: none;
      padding-bottom: 5px;
    }
  }


  h5 {
    font-size: 14px;
    color: $primary;
  }

  a {
    @include link;
    color: $black;
  }

  .contact-container {
    width: 30%;
    font-size: 12px;
    display: inline-block;
  }

  .nav-container {
    width: 30%;
    font-size: 12px;
    display: inline-block;
  }

  .social-media-container {
    width: 30%;
    font-size: 12px;
    display: inline-block;
  }
}
</style>
