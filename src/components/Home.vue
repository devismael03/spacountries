<template>
  <div >


  <input type="text" placeholder="Country name" v-model="countrydata">
  <template v-for="country in countries">
    <CountryItem v-if="countrydata == country.name" :country="country"></CountryItem>
  </template>
  </div>
</template>
<script>
import CountryItem from './Countryitem.vue'
export default {
  name: 'Home',
  components:{CountryItem},
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
