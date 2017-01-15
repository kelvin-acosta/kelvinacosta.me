<template>
  <div class="main-container">
    <div id='me'>
      <me></me>
    </div>
    <div id='about'>
      <about></about>
    </div>
    <div id='work'>
      <experience></experience>
    </div>
    <div id='skills'>
      <skills></skills>
    </div>
    <div id='projects'>
      <projects></projects>
    </div>
  </div>
</template>

<script>
import me from '../sections/Me'
import about from '../sections/About'
import experience from '../sections/Experience'
import skills from '../sections/Skills'
import projects from '../sections/Projects'

export default {
  name: 'Home',
  components: {
    me,
    about,
    experience,
    skills,
    projects
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.main-container {

}
</style>
