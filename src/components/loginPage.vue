<template>
    <div id="login">
        <h1 v-if="!submitted">Enter your Login Deatils</h1>
        <form v-if="!submitted" id="container">
            <label name="username">Username: </label>
            <input type="text" placeholder="Enter Your Username">
            <br>
            <br>
            <label name="Password">Password:</label>
            <input type="text" name="password" placeholder="Enter Your Password">
            <br>
            <br>
            <input type="checkbox">
            <label for="checkbox">Keep me signed in.</label>
            <br>
            <br>
            <button v-on:click.prevent="post" id="login">Login</button>
            <p>Forgot Password??</p>
            <a href="/signup" >Create an  account here</a>
        </form>
        <div v-if="submitted">
            <h2>You're Successfully Loggedin!</h2>
        </div>
    
    </div>
</template>

<script lang="js">

import img from "@/assets/images/backgroundImages/myimage1.jpg"
    export default{
        
        data(){
            return{
                username:"",
                password:'',
                submitted:false,
                img
            }
        },
        methods:{
            post:function(){
                console.log("login")
            this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                title: this.username,
                body: this.password,
                userid:1         
            }).then(function(data){
                console.log(data);
                this.submitted=true;
            });
        } 
    }
}
</script>

<style scoped>
    #container{
        border: 1px solid black;
        width:400px;
        padding: 30px;
        padding-left: 10px;
        background-color: lightgoldenrodyellow;
        color: blueviolet;
        text-align: center;
        margin-left: 100px;
        margin-bottom:100px;
        background-image: img;
    }
    h1{
        text-transform: capitalize;
        color: blue;
        margin-top: 50px;
        margin-left: 100px;
        text-align: start;
        }
        label{
            text-align: start;
            display: inline-block;
            width: 150px;
        }
    button{
        background-color: rgb(149, 159, 149);
        color: blue ;
        text-align: center;
    }
    h2{
        text-align: center;
        color:blue;
        margin-top: 200px;
    }
</style>