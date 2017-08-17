<template>
  <div id="app">
    <input type="text" placeholder="Country name" v-model="countrydata">
    <template v-for="country in countries">
      <h3 v-if="countrydata == country.name">{{country.name}}</h3>
    </template>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      countries:[],
      countrydata:''
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
