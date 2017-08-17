<template>
  <div>
  <img :src="countryinfo.flag" alt="">
  <h3>Alpha 3 code : <b>{{countryinfo.alpha3Code}}</b></h3>
  <h3>Country Name : <b>{{countryinfo.altSpellings[1]}}</b></h3>

  <h3>Area: <b>{{countryinfo.area}} km2</b></h3>
  <h3>Capital: <b>{{countryinfo.capital}}</b></h3>
  <h3 v-for="callingcode in countryinfo.callingCodes">Calling Code: <b>{{callingcode}}</b></h3>
  <h3>Population: <b>{{countryinfo.population}}</b></h3>
   <h3 v-for="language in countryinfo.languages">Language : {{language.name}}</h3>
<h3>Borders : </h3>
   <ul>
  <li v-for="border in countryinfo.borders"><router-link :to="countryUrl(border)"> {{border}}</router-link></li>
 </ul>
  </div>
</template>

<script>

  export default{
  
    data(){
      return{
        countryinfo:[]
      }
    },
    watch:{
      '$route':'fetchCountryData'
    },
    created(){
      this.fetchCountryData();
    },
    methods:{
      countryUrl(border){
        return '/country/'+border;
      },
      fetchCountryData(){
          fetch("https://restcountries.eu/rest/v2/alpha/"+this.$route.params.code).then((res)=>{return res.json();}).then((res)=>{this.countryinfo=res;});
      }
    }
  }
</script>
<style >
  ul li{
    list-style: none;
    margin-bottom:10px;
  }
</style>
