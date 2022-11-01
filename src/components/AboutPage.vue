<template>
    <div class="about">
        <img :src="img" alt="biryani">
        <h1>About Us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam ut, laboriosam numquam consequatur impedit ad reprehenderit sapiente, porro ipsum itaque velit? Eum itaque accusantium laboriosam? Odio repellendus exercitationem eveniet ab, eligendi tempora eius voluptates nostrum rerum quod culpa, facilis aut labore ipsa cumque magnam nesciunt deleniti expedita modi accusantium a aspernatur blanditiis mollitia. Vitae harum rem dolorum cumque fugit autem eligendi possimus, in doloribus iste, fugiat cupiditate molestias et id ducimus maiores? Praesentium corrupti amet perspiciatis sequi eum ipsam, architecto officia atque, illo dolores enim nesciunt, commodi dolore soluta sit. Voluptatem, omnis unde perferendis nulla molestias veniam tenetur amet aperiam libero, cupiditate magni perspiciatis aliquid. Natus adipisci qui laborum accusamus veritatis harum dolores quidem repellendus, nisi eligendi excepturi animi laudantium, omnis ipsa, odio magnam quibusdam veniam placeat quo necessitatibus sunt! Est dolorem voluptas explicabo deleniti laudantium eveniet nobis repellendus exercitationem. Voluptates delectus fugit officiis repellat officia vero tempora alias pariatur, natus, nulla velit aliquid animi quasi mollitia asperiores quibusdam. Eum aliquam eveniet dolore soluta obcaecati aspernatur cupiditate quos! Quam, voluptas ea! Cumque molestiae ad minus. Vitae eius perspiciatis nulla explicabo culpa dolorem voluptatum architecto, facere voluptas ex vel dolore. Consectetur dolores aperiam natus rerum repellendus quis doloremque eum! Eos, eaque.</p>

    </div>
</template>
<script>

import img from "@/assets/images/aboutImages/pic1.jpg";
export default{
    data(){
        return{
            img
        }
    }
}

</script>
<style scoped>
.about{
    margin-top: 50px;
}
img{
    width: 100%;
}
h1{
    font: optional;
    font-style: italic;
    opacity:initial;
    visibility: visible;
}
p{
    color: black;
    display: flex;
    flex-wrap: wrap;
    text-align: start;
    text-decoration-style: dashed;
    color: blue;
    
}
</style>