<template>
    <div class="general">
        <h1>Productos Recomendados:</h1>
        <div class="body">
            <div class="wrapper">
                <i id="left" class="fa fa-angle-left" @click="scrollLeft"></i>
                <ul class="carousel" ref="carousel">
                    <li class="card" v-for="(product, index) in products" :key="index">
                        <div class="img"><img :src="product.images[0]" alt="img" draggable="false"></div>
                        <h2>{{ product.name }}</h2>
                        <span>{{ product.description }}</span>
                        <h3>S/.{{ product.price }}</h3>
                        <!-- <button>Pedir</button> -->
                    </li>
                </ul>
                <i id="right" class="fa fa-angle-right" @click="scrollRight"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { nextTick } from 'vue';
import { obtenerProductos } from '../../../utils/products/products.api.js';

export default {
    data() {
        return {
            products: []
        };
    },
    methods: {
        scrollLeft() {
            const carousel = this.$refs.carousel;
            const firstCardWidth = carousel.querySelector(".card").offsetWidth;
            carousel.scrollBy({
                left: -firstCardWidth,
                behavior: 'smooth'
            });
        },
        scrollRight() {
            const carousel = this.$refs.carousel;
            const firstCardWidth = carousel.querySelector(".card").offsetWidth;
            carousel.scrollBy({
                left: firstCardWidth,
                behavior: 'smooth'
            });
        },
        async fetchProductos() {
            this.products = await obtenerProductos();
            await nextTick();
            // Ensure the DOM is updated before adding event listeners
            this.initCarousel();
        },
        initCarousel() {
            const carousel = this.$refs.carousel;
            const firstCardWidth = carousel.querySelector(".card").offsetWidth;
            const carouselChildrens = [...carousel.children];
            let isDragging = false, startX, startScrollLeft;

            const startDrag = (e) => {
                isDragging = true;
                startX = e.pageX || e.touches[0].pageX;
                startScrollLeft = carousel.scrollLeft;
                carousel.classList.add("dragging");
            };

            const onDrag = (e) => {
                if (!isDragging) return;
                const x = e.pageX || e.touches[0].pageX;
                const walk = (x - startX) * 1.5; //scroll-fast
                carousel.scrollLeft = startScrollLeft - walk;
            };

            const stopDrag = () => {
                isDragging = false;
                carousel.classList.remove("dragging");
            };

            carousel.addEventListener('mousedown', startDrag);
            carousel.addEventListener('touchstart', startDrag);
            carousel.addEventListener('mousemove', onDrag);
            carousel.addEventListener('touchmove', onDrag);
            carousel.addEventListener('mouseup', stopDrag);
            carousel.addEventListener('touchend', stopDrag);
            carousel.addEventListener('mouseleave', stopDrag);

            let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
            carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
                carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
            });
            carouselChildrens.slice(0, cardPerView).forEach(card => {
                carousel.insertAdjacentHTML("beforeend", card.outerHTML);
            });
        }
    },
    mounted() {
        this.fetchProductos();
    }
};
</script>

<style scoped>
@import url('./Recommendations.css');
</style>
