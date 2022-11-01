<template>
    <div class="menu">
        <p>OUR DISHES</p>
        <h1>Our Menu</h1>
        <div class="row1">
            <div class="curry">
                <a href="/menuPage"><img :src="currys" class="image" ></a>
                <br>
                <br>
                <a href="/menuPage">CURRY DISHES</a>
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
        </div>
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
            "currys":currys,
            chows,
            biryanis,
            sweets,
            tandooris,
            naans,
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
.curry{
    display: inline-block;
    margin: 50px;
}
.biryani{
    display: inline-block;
    margin: 50px;

}
.chow{
    display: inline-block;
    margin: 50px;

}
.image{
    width: 120px;
    height: 200px;
}
.row2{
    display: inline;
}
.sweet{
    display: inline-block;
    margin: 50px;
}
.tandoori{
    display: inline-block;
    margin: 50px;
}
.naan{
    display: inline-block;
    margin: 50px;

}


</style>