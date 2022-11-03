<template>
    <div class="menu">
        <p>OUR DISHES</p>
        <h1>Our Menu</h1>
        <div>
            <div class="header" v-for="menu in menus" :key="menu">
                <div class="dishes">
                    <a href="/menuPage"><img :src="menu.img" class="image"></a>
                    <br>
                    <br>
                    <a href="/menuPage"> {{menu.title}} </a>
                    <br>
                    <br>
                    <a href="/menuPage"> {{menu.order}} <span> &#x2192;</span></a>
                </div>
            </div>
        </div>        
                <!--<a href="/menuPage#section.head"><img :src="currys" class="image" ></a>
                <br>
                <br>
                <a href="/menuPage#sectio.head">CURRY DISHES</a>
                <br>
                <br>
                <a href="/menuPage">ORDER NOW <span>&#x2192;</span></a>
            </div>
            <div class="biryani">
                <a href="/menuPage" ><img :src="biryanis" class="image"></a>
                <br>
                <br>
                <a href="/menuPage">BIRYANI DISHES</a>
                <br>
                <br>
                <a href="/menuPage">ORDER NOW <span>&#x2192;</span></a>
            </div>
            <div class="chow">
                <a href="/menuPage" ><img :src="chows" class="image"></a>
                <br>
                <br>
                <a href="/menuPage">CHOW MEIN</a>
                <br>
                <br>
                <a href="/menuPage">ORDER NOW <span>&#x2192;</span></a>
            </div>
        </div>
        <div class="row2">
            <div class="sweet">
                <a href="/menuPage"><img :src="sweets" class="image"></a>
                <br>
                <br>
                <a href="/menuPage">SWEET AND SOUR</a>
                <br>
                <br>
                <a href="/menuPage">ORDER NOW <span>&#x2192;</span></a>
            </div>
            <div class="tandoori">
                <a href="/menuPage"><img :src="tandooris" class="image"></a>
                <br>
                <br>
                <a href="/menuPage">TANDOORI DISHES</a>
                <br>
                <br>
                <a href="/menuPage">ORDER NOW <span>&#x2192;</span></a>
            </div>
            <div class="naan">
                <a href="/menuPage"><img :src="naans" class="image"></a>
                <br>
                <br>
                <a href="/menuPage">NAAN DISHES</a>
                <br>
                <br>
                <a href="/menuPage">ORDER NOW <span>&#x2192;</span></a>
            </div>
        </div>-->
    </div>
</template>

<script>
import currys from "@/assets/images/MenuImages/currys.jpg";
import chows from "@/assets/images/MenuImages/chowmein.jpg";
import biryanis from "@/assets/images/MenuImages/biryani.jpg";
import sweets from "@/assets/images/MenuImages/sweetsour.jpg";
import tandooris from "@/assets/images/MenuImages/tandoori.jpg";
import naans from "@/assets/images/MenuImages/naans.jpg";

export default{
    data(){
        return{
            menus:[
                {
                    img: currys,
                    title:"CURRY DISHES",
                    order:"ORDER NOW"
                },
                {
                    img:biryanis,
                    title:"BIRYANI DISHES",
                    order:"ORDER NOW"
                },
                {
                    img:chows,
                    title:"CHOW MEIN",
                    order:"ORDER NOW"
                },
                {
                    img:sweets,
                    title: "SWEET N SOUR",
                    order:"ORDER NOW"
                },
                {
                    img:tandooris,
                    title: "TANDOORI",
                    order:"ORDER NOW"
                },
                {
                    img:naans,
                    title:"NAANS",
                    order:"ORDER NOW"
                },
            ],
        }
    },
    }
</script>
<style scoped>
.menu{
    background-color: black;
    color: white;
}
a{
    color: white;
    text-decoration: none;  
}
.image{
    width: 200px;
    height: 200px;
}
.header,.dishes{
    display: inline-block;
    margin: 50px;
}
.dishes{
    margin: 40px;
}
</style>