<template>
  <div>
    <headroom :speed="350">
      <div class="nav-container box-shadow">
        <!-- Left Nav items-->
        <div class="nav-items left-items">
          <li>
            <router-link to="/" exact><img class="logo" src="../assets/kelvin-circle.svg" alt="Kelvin Acosta"></router-link>
          </li>
        </div>
        <!--Right Nav items -->
        <ul class="nav-items right-items">
          <li><router-link to="#about">About</router-link></li>
          <li><router-link to="#work">Work</router-link></li>
          <li><router-link to="#skills">Skills</router-link></li>
          <li><router-link to="#projects">Projects</router-link></li>
        </ul>
      </div>
    <headroom>
  </div>
</template>

<script>
import headroom from 'vue-headroom'

export default {
  name: 'Navbar',
  components: {
    headroom
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@import '../scss/imports';

.router-link-active {
  color: white;
}

.box-shadow {
  -webkit-box-shadow: 0 0px 1px 1px $shadow;
  -moz-box-shadow: 0 0px 1px 1px $shadow;
  box-shadow: 0 0px 1px 1px $shadow;
}

.nav-container {
    position: relative;
    z-index: 3;
    background-color: $white;
    width: 100%;
    height: 80px;
    font-size: 18px;
    @include clearfix;

    &:after {
      background-color: $white;
    }

    .left-items {
        position: absolute;
        float: left;
        margin-left: 40px;
    }
    .right-items {
        float: right;
        margin-right: 40px;
    }

    .nav-items {
        z-index: 2;
        line-height: 2.5;
        li {
            display: block;
            float: left;
            a {
                margin: 0 20px;
                @include link;
            }

            .logo {
              width: 80px;
            }
        }
    }
}
</style>
