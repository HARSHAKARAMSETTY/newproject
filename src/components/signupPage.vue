<template>
    <div id="signup" >
        <h1 v-if="!submitted">Please fill this form</h1>
        <form v-if="!submitted" id="container">
            <label name="firstname">First Name: </label>
            <input type="text" placeholder="Enter Your First Name" name="name">
            <br>
            <br>
            <label name="lastname">Last Name: </label>
            <input type="text" placeholder="Enter Your last Name" name="name">
            <br>
            <br>
            <label name="mailid">Mail Id: </label>
            <input type="text" placeholder="Enter Your Mail Id" name="name">
            <br>
            <br>
            <label name="number">Mobile Number: </label>
            <input type="number" placeholder="Enter Your Mobile Number" name="name">
            <br>
            <br>
            <label name="password">Create Password: </label>
            <input type="text" placeholder="Create a new password" name="name">     
            <br><br>
            <label name="password">Confirm Password: </label>
            <input type="text" placeholder="Re-type Your Password" name="name">
            <br><br>
            <div id="button">
            <button v-on:click.prevent="post">Signup</button>
        </div>
        </form>
        <div v-if="submitted">
            <h2>You're Successfully Created an Account</h2>
            <a href="/login">Login here</a>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                firstname:"",
                lastname:"",
                mobilenumber:"",
                password:"",
                submitted:false
            }
        },
        methods:{
            post:function(){
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
        width:500px;
        padding: 30px;
        padding-left: 10px;
        background-color: lightgoldenrodyellow;
        color: blueviolet;
        text-align: center;
        margin-left: 100px;
        margin-bottom:100px;
        
    }
    h1{
        color: blue;
        margin-left: 100px;
        margin-top: 50px;
        text-transform: capitalize;
        text-align: left;
    }
    label{
        text-align: start;
        display: inline-block;
        width: 150px;
    }
    #button{
        text-align: center;
    }
    button{
        background-color: lightgreen;
        color: blue;
    }
    h2{
        text-align: center;
        color:blue;
        margin-top: 200px;
    }
</style>