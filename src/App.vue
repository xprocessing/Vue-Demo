<template>
  <div id="app">
    <mt-header title="vue+Mint UI">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>


    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-view name="ElemeMint"></router-view>
    

  </div>
</template>

<script>
  export default {
    name: 'app'
  }

</script>

<style>
  html,body{ padding: 0; margin: 0;}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
</style>