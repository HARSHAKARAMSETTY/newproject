<template>
  <div id="app">
    <nav id="navBar1">
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link>
    </nav>
    <nav id="navBar2">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About Us</router-link> |
      <router-link to="/Menu">Menu</router-link> |
      <router-link to="/Contact">Contact Us</router-link> 
    </nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/FooterPage.vue"
export default{
    name:"FooterPage",
    components:{
      Footer
    }
}

</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
#navBar1{
  background-color: lightblue;
  text-align: end;
  height: 10px;
}
#title{
  text-align: start;
  text-transform: uppercase;
  color: red;
  display: inline-flex;
  flex-direction: start;
  
}
#navBar2{
  background-color: lightgreen;
  text-align: left;
}
</style>
