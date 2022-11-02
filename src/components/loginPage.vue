<template>
    <div id="login">
        <h1 v-if="!submitted">Enter your Login Deatils</h1>
        <form v-if="!submitted" id="container" @login.prevent="onlogin">
            <div class="errorMessage" v-if="errors.length">
                <h1>Please correct the following error. (s)</h1>
                <ul>
                    <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
                </ul>
            </div>
            <label name="username">Username: </label>
            <input type="text" placeholder="Enter Your Username" v-model="name" />
            <br>
            <br>
            <label name="Password">Password:</label>
            <input type="text" name="password" placeholder="Enter Your Password" v-model="password" />
            <br>
            <br>
            <input type="checkbox">
            <label for="checkbox">Keep me signed in.</label>
            <br>
            <br>
            <button v-on:click.prevent="login" id="login">Login</button>
            <p>Forgot Password??</p>
            <a href="/signup" >Create an  account here</a>
        </form>
        <div v-if="submitted">
            <h2>You're Successfully Loggedin!</h2>
        </div>
    
    </div>
</template>

<script>

import img from "@/assets/images/backgroundImages/myimage1.jpg"
import {eventBus} from '../main.js'
    export default{
        
        data(){
            return{
                username:"",
                password:'',
                submitted:false,
                img,
                errors:[]
            }
        },
        methods:{
            login:function(){
                console.log("login")
            this.$http.post('https://jsonplaceholder.typicode.com/posts',{
                title: this.username,
                body: this.password,
                userid:1         
            }).then(function(data){
                console.log(data);
                this.submitted=true;
            });
        } ,
        onlogin() {
            this.errors = []
            if(this.username && this.password){
                let loginPage ={
                    name:this.username,
                    password:this.password
                }
                eventBus.$emit('login-page', loginPage)
                this.username = null
                this.password = null
                }
                else{
                    if(!this.username) this.errors.push("username required")
                    if(!this.password) this.errors.push("password required")

                }
            }
        },
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