<template>
  <div>
    <h1>{{country.name}}</h1>
  </div>
</template>

<script>
  export default{

    props:{
      country:{
        type:Object,
        required:true,

      }
    }

  }
</script>
