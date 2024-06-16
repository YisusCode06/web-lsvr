<script setup>
import NavBar from '../components/navbar/NavBar.vue'
import Footer from '../components/footer/Footer.vue'
</script>
<template>
    <div class="gen-homeview">
        <NavBar />
        <div class="content-homeview">
            <router-view />
        </div>
        <Footer />
    </div>
</template>
<style scoped>
.gen-homeview {
    min-width: none;
}
</style>