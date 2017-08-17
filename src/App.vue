<template>
  <div id="app">
    <template v-for="country in countries">
      <h1>hello</h1>
    </template>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      countries:[]
    }
  },
  created(){
    fetch("https://restcountries.eu/rest/v2/all").then((res) => {
      return res.json(); }).then((res) => {
        this.countries=res; });
      }

  }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}


</style>
