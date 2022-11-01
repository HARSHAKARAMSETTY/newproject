<template>
    <div id="app">
        <login-page></login-page>
    </div>
</template>

<script>

import loginPage from "@/components/loginPage.vue";
export default {
    components:{
        "login-page":loginPage,
    }
}
</script>
