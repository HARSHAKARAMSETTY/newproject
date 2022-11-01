<template>
    <div>
        <transition-group name="'fade" tag="div">
            <div v-for="(image,index) in images" :key="image">
                <img :src="image" v-if="index == currentImageIndex">
            </div>
        </transition-group>
        <a class="prev" @click="prev" href="#">&#10094; Previous</a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
        <br>
        <br>
        <div class="content">
            <img src="@/assets/images/HomeImages/pic5.jpg" alt="restaurant image" id="building">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae maiores adipisci vel quod earum accusamus consequuntur cumque doloremque, quisquam fuga porro quas aliquam, saepe perspiciatis modi molestiae, veritatis unde illum quis possimus id error. Porro tempore pariatur ipsam officiis enim modi? Sunt quae reprehenderit explicabo illum at minus eum temporibus nostrum error omnis in alias dicta itaque recusandae, nulla quisquam deleniti magnam obcaecati atque laudantium, perspiciatis numquam ad. Nemo natus sapiente culpa maxime molestiae aliquid vitae fugiat optio doloremque vero voluptatibus facilis pariatur vel dolorum a dolor quod dolore, iure ipsa, dicta totam at. Unde quisquam accusantium magnam velit fugiat blanditiis nobis, nemo expedita voluptate. Blanditiis facilis aliquid perferendis fuga nam omnis nesciunt, magnam, provident iusto minus perspiciatis repudiandae rerum. Tempore, perspiciatis dolores! Nisi, magni! Consequatur dolor modi repellendus quis rem? Perferendis fugiat modi repellat labore nesciunt, et necessitatibus fugit, repudiandae reiciendis nostrum voluptates pariatur voluptatem cum neque rem laudantium a nihil distinctio? Cupiditate esse alias, molestiae a itaque est saepe quis ipsum incidunt sunt eius voluptatem culpa pariatur quae quaerat! Hic facilis delectus, quia suscipit sint tempora commodi dicta unde assumenda, magni velit molestias magnam odio temporibus. Cumque laudantium magnam molestiae pariatur tempore omnis saepe quia illo eius!
        </div>
    </div>
</template>

<script>
import pic1 from "@/assets/images/HomeImages/pic1.jpg";
import pic2 from "@/assets/images/HomeImages/pic2.jpg";
import pic3 from "@/assets/images/HomeImages/pic3.jpg";
import pic4 from "@/assets/images/HomeImages/pic4.jpg";

export default{
    data(){
        return{
            images:[pic1,pic2,pic3,pic4],
            timer:1,
            currentImageIndex:0
        };
    },
    mounted: function(){
        this.startSlide();
    },
    methods:{
        startSlide:function(){
            this.timer = setInterval(this.next,4000);
        },
        next:function(){
            this.currentImageIndex = this.currentImageIndex >= this.images.length-1 ? 0 :this.currentImageIndex + 1 ;
        },
        prev:function(){
            this.currentImageIndex = this.currentImageIndex <  1 ? this.images.length-1 :this.currentImageIndex - 1;
        }
    },
    computed:{
        
    }
};
</script>

<style scoped>
.fade-enter-active{
    transition: all 0.9s ease;
    overflow: hidden;
    visibility: hidden; 
    position: fixed;
    width: 100%;
    opacity: 1;
}
.fade-enter,
.fade-leave-to{
    visibility: hidden;
    width: 100%;
    opacity: 0;
}
img{
    height: 600px;
    width: 100%;
}
.prev,.next{
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
}
.next{
    right: 0;
}
.prev{
    left: 0;
}
.prev:hover, .next:hover{
    background-color: rgba(0,0,0,0,9);
}
#building{
    position: relative;
    width: 60%; 
    float: left;
    margin-bottom: 10px;
    overflow: hidden;
    z-index: 0;
}
.content{
    display: block;
    object-fit:contain;
    overflow: hidden;
}

</style>