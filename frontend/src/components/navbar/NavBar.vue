<template>
    <header>
        <div class="logo">
            <figure>
                <a href="/">
                    <img src="../../assets/images/logo1.png" alt="Logo Empresa">
                </a>
            </figure>
        </div>
        <input type="checkbox" id="nav_check" v-model="navOpen" hidden>
        <nav>
            <ul>
                <li>
                    <router-link to="/home" @click.native="closeMenu" active-class="active" exact>Inicio</router-link>
                </li>
                <li>
                    <router-link to="/products" @click.native="closeMenu" active-class="active">Productos</router-link>
                </li>
                <li>
                    <router-link to="/aboutme" @click.native="closeMenu" active-class="active">Sobre
                        Nosotros</router-link>
                </li>
                <li>
                    <router-link to="/contact" @click.native="closeMenu" active-class="active">Contactanos</router-link>
                </li>
            </ul>
        </nav>
        <label for="nav_check" class="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </label>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navOpen: false
        };
    },
    methods: {
        closeMenu() {
            this.navOpen = false;
        }
    }
}
</script>

<style scoped>
@import url('./NavBar.css');
</style>