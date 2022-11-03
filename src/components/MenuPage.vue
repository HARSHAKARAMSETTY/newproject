<template>
    <div>
        <nav>
            <div class="shoppingcart">
                <a href="#basket"><i class="fa fa-shopping-cart"></i>  {{cart.length}}</a>
                
            </div>
        </nav>
        <div class="menupage">
            <div class="headings">
                <h2>Restaurant Course</h2>
                <ul v-for="section in sections" :key="section">
                    <div class="header">
                        <a href="#section.head">{{[section.head][0]}}</a>
                    </div>
                    <!--<a href="#vegcurrys">VEG CURRY'S</a>
                    <br>
                    <br>
                    <a href="#biryani">Biryani</a>
                    <br>
                    <br>
                    <a href="#chowmein">Chow Mein</a>
                    <br>
                    <br>
                    <a href="#sweetandsour">Sweet And Sour</a>
                    <br>
                    <br>
                    <a href="#tandoori">Tandoori</a>
                    <br>
                    <br>
                    <a href="#naan">Naans And Rice</a>-->
                </ul>
            </div>
            <div class="items">
                <dishes>
                    <div v-for="section in sections" :key="section">
                        <div class="dish-header">
                            <h2 id="section.head">{{section.head}}</h2>
                            <p>{{section.message}}</p>
                        </div>
                        <div  v-for="dish in section.dishes" :key="dish">
                            <div  class="dish-items">
                                <h3>{{dish.title}}</h3>
                                <div class="dish-price" >
                                    <h5 class="price">{{dish.price}}</h5>
                                    <button class="btn" v-on:click="add(dish)">ADD</button>
                                </div>
                            </div>
                            <p>{{dish.description}}</p>
                        </div>  
                    </div>
                </dishes>    
            </div>
            <div id="basket">
                <h2>Your Basket</h2>
                <div v-for="dish in cart" :key="dish.name">
                    <div class="dish-items">
                        <h3>{{dish.title}}</h3>
                        <div class="dish-price" >
                            <h5 class="price">{{dish.price}}</h5>
                            <button class="btn" v-on:click="removeItem(dish)">delete</button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        
    </div>              
</template>

<script>
export default{
    
    data(){
        return{
            cart:[],
            sections:[ 
                    {
                        head:"VEGCURRY",
                        message:"Please notify us if you need it Mild - Medium or Hot",
                        dishes:[
                            {title:'TadkaDaal',price:'5.00',description:'combination three lentils tempered with crushed garlic and whole red chillies'},
                            {title:'ChannaMasala',price:'6.00',description:'Semi dry curry made with chick-peas and freshly ground spices.'},
                            {title:'ButterMasala',price:'7.00',description:'Cottage chesse cooked in a simmered gravy made of butter,tomato,cashew and cream.'},
                            {title:'TikkaMasala',price:'8.00',description:'Cottage cheese cooked in a fresh tomatoes and cashew sauce along with capsicum, onion and cream.'},
                        ]
                    },
                    {
                        head:"BIRYANI's",
                        message:'Hyderabadi Dum Biryani And Desi Rice',
                        dishes:[
                            {title:'PaneerBiryani',price:'7.00'},
                            {title:'ChickenDumBiryani',price:'7.00'},
                            {title:'LambBiryani',price:'9.00'},
                            {title:'PrawnsBiryani',price:'8.00'},
                        ]   
                    },
                    {
                        head:'CHOWMEIN',
                        dishes:[
                            {title:'Vegetable Hakka Noodles',price:'7.00'},
                            {title:'Prawns Hakka Noodles',price:'7.00'},
                            {title:'Chicken Hakka Noodles',price:'7.00'},
                            {title:'Vegetable chowmein Noodles',price:'7.00'},
                        ]
                    },
                    {
                        head:'SWEET N SOUR',
                        dishes:[
                            {title:'Vegetable Hot N Sour Soup',price:'7.00'},
                            {title:'Vegetable Noodle Soup',price:'7.00'},
                            {title:'Sweetcorn With Chicken Soup',price:'7.00'},
                            {title:'Hot N Sour Chicken Soup',price:'7.00'},
                        ]     
                    },  
                    {
                        head:'TANDOORI',
                        dishes:[
                            {title:'Full Tandoori Chicken With Chips',price:'7.00'},
                            {title:'Half Tandoori Chicken With Chips',price:'7.00'},
                            {title:'6pcs Chicken Tikka',price:'7.00'},
                        ]
                    },
                    {
                        head:'NAANS',
                        dishes:[
                            {title:'Plain Naan',price:'7.00'},
                            {title:'Butter Naan',price:'7.00'},
                            {title:'Boiled Rice',price:'7.00'},
                            {title:'Jeera Rice',price:'7.00'},
                        ]
                    },
                ],
        }
    },
    methods:{
        add(id) {
            this.cart.push(id);
        },
        removeItem(dish) {
            this.cart.splice(this.cart.indexOf(dish),1);
        }
    }
}

</script>

<style scoped>
.menupage{
    background-color: white;
}
nav{
    background-color: bisque;
    position: relative;
    margin-bottom: 10px;
}
.shoppingcart{
    text-align: end;
    height: 3px;
}
.headings{
    
    border: 2px solid black;
    text-align: left;
    padding: 20px;
    margin: 10px;
    position: fixed;
    left: 50px;
    right: 1100px;
}
@media  screen and (min-width:400px),(min-width:200px) {
    .headings{
        right: 500px;
    }
}
@media  screen and (min-width:800px) {
    .headings{
        right: 1100px;
    }
}
a{
    text-decoration: none;
}

.items{
    display: inline-block;
    border: 2px solid black;
    width: 500px;
    margin: 10px 10px 10px 100px;
    padding: 10px;
}
 
@media screen and (min-width: 400px) {
    .items{
        width: min-content;
        background-color: lightgreen;
        margin: 10px;
    }
} 
@media screen and (min-width: 800px) {
    .items{
        width:500px;
        background-color:lightgreen;
    } 
}
p{
    text-align: left;
}
h2{
    color: red;
    text-align: left;
}
.dish-header{
    display: block;
}
.dish-items{
    display: flex;
    justify-content: space-between;
}
.price{
    display: inline-block;
    padding: 10px;
}
.btn{
    height: 20px;
    display: inline-block; 
}
#basket{
    display: inline-block;
    border: 2px solid black;
    margin: 10px;
    padding: 10px;
    width: 300px;
    justify-content:space-around;
    position: absolute;
}
</style>