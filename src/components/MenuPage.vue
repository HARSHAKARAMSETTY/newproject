<template>
    <div class="menupage">
        <nav>
            <div class="shoppingcart">
                <a href="#basket"><i class="fa fa-shopping-cart"></i>  {{cart.length}}</a>
                
            </div>
        </nav>
        <div class="headings">
            <h2>Restaurant Course</h2>
            <ul>
                <a href="#vegcurrys">VEG CURRY'S</a>
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
                <a href="#naan">Naans And Rice</a>
            </ul>
        </div>
        <div class="items">
            <dishes>
                <div class="menu" v-for="dish in dishes" :key="dish">
                    <div>
                        <h2>{{dish.head}}</h2>
                        <p>{{dish.message}}</p>
                    </div>
                    <h3 >{{dish.title}}</h3>
                    <h5 class="price">{{dish.price}}</h5>
                    <button class="btn" v-on:click="add(dish)">ADD</button>
                    <p>{{dish.description}}</p>
                </div>
            </dishes>    
        </div>
        <div id="basket" v-if="page === 'cart'">
            <h2>Your Basket</h2>
            <div v-for="dish in cart" :key="dish.name">
                {{dish.title}}
                {{dish.price}}
                <button v-on:click="removeItem(dish)">delete</button>
            </div>   
        </div>
    </div> 
        <!--<div>
        <biryanis>
                <h2 id="biryani"> DUM BIRYANI</h2>
                    <p>Hyderabadi Dum Biryani And Desi Rice</p>
                    <div class="menu" v-for="biryani in biryanis" :key="biryani">
                        <h3 >{{biryani.title}}</h3>
                        <h5 class="price">{{biryani.price}}</h5>
                        <button class="btn" v-on:click="add(biryani)">ADD</button>
                    </div>    
            </biryanis>    
        </div>
        <div>
            <chowmeins>
                <h2 id="chowmein">CHOW MEIN</h2>
                    <p></p>
                    <div class="menu" v-for="chowmein in chowmeins" :key="chowmein">
                        <h3 >{{chowmein.title}}</h3>
                        <h5 class="price">{{chowmein.price}}</h5>
                        <button class="btn" v-on:click="add">ADD</button>
                    </div> 
            </chowmeins>
        </div>
        <div>
            <sweets>
                <h2 id="sweetandsour"> SWEET AND SOUR</h2>
                    <p>Veg Soup</p>
                    <div class="menu" v-for="sweet in sweets" :key="sweet">
                        <h3 >{{sweet.title}}</h3>
                        <h5 class="price">{{sweet.price}}</h5>
                        <button class="btn" v-on:click="add">ADD</button>
                    </div> 
            </sweets>
        </div>
        <div>
            <tandooris>
                <h2 id="tandoori"> TANDOORI MENU</h2>
                    <p>Tandoori Menu</p>
                    <div class="menu" v-for="tandoori in tandooris" :key="tandoori">
                        <h3 >{{tandoori.title}}</h3>
                        <h5 class="price">{{tandoori.price}}</h5>
                        <button class="btn" v-on:click="add">ADD</button>
                    </div> 
            </tandooris>
        </div>
        <div>
            <naans>
                <h2 id="naan"> NAAN AND RICE</h2>
                    <p>Naans</p>
                    <div class="menu" v-for="naan in naans" :key="naan">
                        <h3 >{{naan.title}}</h3>
                        <h5 class="price">{{naan.price}}</h5>
                        <button class="btn" v-on:click="add">ADD</button>
                    </div> 
            </naans>
        </div>-->              
</template>

<script>
export default{
    
    data(){
        return{
            cart:[],
            page:"cart",
            dishes:[
                    {head:"Veg Curry"},
                    {message:"Please notify us if you need it Mild - Medium or Hot"},
                    {title:'TadkaDaal',price:'5.00',description:'combination three lentils tempered with crushed garlic and whole red chillies'},
                    {title:'ChannaMasala',price:'6.00',description:'Semi dry curry made with chick-peas and freshly ground spices.'},
                    {title:'ButterMasala',price:'7.00',description:'Cottage chesse cooked in a simmered gravy made of butter,tomato,cashew and cream.'},
                    {title:'TikkaMasala',price:'8.00',description:'Cottage cheese cooked in a fresh tomatoes and cashew sauce along with capsicum, onion and cream.'},
                    {head:'DUM BIRYANI'},
                    {message:'Hyderabadi Dum Biryani And Desi Rice'},
                    {title:'PaneerBiryani',price:'7.00'},
                    {title:'ChickenDumBiryani',price:'7.00'},
                    {title:'LambBiryani',price:'9.00'},
                    {title:'PrawnsBiryani',price:'8.00'},
                    {head:'CHOWMEIN'},
                    {title:'Vegetable Hakka Noodles',price:'7.00'},
                    {title:'Prawns Hakka Noodles',price:'7.00'},
                    {title:'Chicken Hakka Noodles',price:'7.00'},
                    {title:'Vegetable chowmein Noodles',price:'7.00'},
                    {head:'SWEET N SOUR'},
                    {title:'Vegetable Hot N Sour Soup',price:'7.00'},
                    {title:'Vegetable Noodle Soup',price:'7.00'},
                    {title:'Sweetcorn With Chicken Soup',price:'7.00'},
                    {title:'Hot N Sour Chicken Soup',price:'7.00'},
                    {head:'TANDOORI'},
                    {title:'Full Tandoori Chicken With Chips',price:'7.00'},
                    {title:'Half Tandoori Chicken With Chips',price:'7.00'},
                    {title:'6pcs Chicken Tikka',price:'7.00'},
                    {head:'NAANS'},
                    {title:'Plain Naan',price:'7.00'},
                    {title:'Butter Naan',price:'7.00'},
                    {title:'Boiled Rice',price:'7.00'},
                    {title:'Jeera Rice',price:'7.00'},
                ],
            /* biryanis:[
                {title:'PaneerBiryani',price:'7.00'},
                {title:'ChickenDumBiryani',price:'7.00'},
                {title:'LambBiryani',price:'9.00'},
                {title:'PrawnsBiryani',price:'8.00'},
            ],
            chowmeins:[
                {title:'Vegetable Hakka Noodles',price:'7.00'},
                {title:'Prawns Hakka Noodles',price:'7.00'},
                {title:'Chicken Hakka Noodles',price:'7.00'},
                {title:'Vegetable chowmein Noodles',price:'7.00'},
            ],
            sweets:[
                {title:'Vegetable Hot N Sour Soup',price:'7.00'},
                {title:'Vegetable Noodle Soup',price:'7.00'},
                {title:'Sweetcorn With Chicken Soup',price:'7.00'},
                {title:'Hot N Sour Chicken Soup',price:'7.00'}
            ],
            tandooris:[
                {title:'Full Tandoori Chicken With Chips',price:'7.00'},
                {title:'Half Tandoori Chicken With Chips',price:'7.00'},
                {title:'6pcs Chicken Tikka',price:'7.00'}
            ],
            naans:[
                {title:'Plain Naan',price:'7.00'},
                {title:'Butter Naan',price:'7.00'},
                {title:'Boiled Rice',price:'7.00'},
                {title:'Jeera Rice',price:'7.00'},
            ]*/
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
    display: inline-block;
    border: 1px solid black;
    text-align: start;
    padding: 20px;
    margin-top: 10px;
    position: fixed;
    width: 300px;
    height: 300px;
    right: 1000px;
    top: 230px;
    bottom: 1000px;

}
a{
    text-decoration: none;
}

dishes{
    display: inline-block;
    border: 1px solid black;
    width: 500px;
    margin: 10px 10px 10px 100px;
    padding: 10px;
}
p{
    text-align: left;
}

h2{
    color: red;
    text-align: left;
}
.menu{
    text-align: left;
    display: flex;
    flex-wrap: wrap;
}
h3{
    padding-right: 200px;
    position: relative;
}
.price{
    text-align: end;
    display: inline-block;
}
.btn{
    width: none;
    height: 50px;
    display: inline-block; 
}
#basket{
    display: inline-block;
    border: 1px solid black;
    margin-top: 10px;
    padding: 10px;
}

</style>