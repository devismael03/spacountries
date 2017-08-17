<template>
  <div>
    <router-link :to="countryInfoUrl">
    <h1>{{country.name}}</h1>
  </router-link>
  </div>
</template>

<script>
  export default{
    name:'CountryItem',
    props:{
      country:{
        type:Object,
        required:true,

      }
    },
    computed:{
      countryInfoUrl(){
        return '/country/'+this.country.alpha3Code
      }
    }

  }
</script>
