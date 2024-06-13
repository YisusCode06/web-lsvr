<template>
    <div class="general">
        <h1>Productos Recomendados:</h1>
        <div class="body">
            <div class="wrapper">
                <i id="left" class="fa fa-angle-left" @click="scrollLeft"></i>
                <ul class="carousel" ref="carousel">
                    <li class="card" v-for="(card, index) in cards" :key="index">
                        <div class="img"><img :src="card.imgSrc" alt="img" draggable="false"></div>
                        <h2>{{ card.name }}</h2>
                        <span>{{ card.description }}</span>
                        <h3>S/.{{ card.price }}</h3>
                        <!-- <button>Pedir</button> -->
                    </li>
                </ul>
                <i id="right" class="fa fa-angle-right" @click="scrollRight"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                { imgSrc: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/4670/PMP20000317623/full_image-1.jpeg", name: "Producto 1", description: "Sales Manager", price: "0" },
                { imgSrc: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/4670/PMP20000317623/full_image-1.jpeg", name: "Producto 2", description: "Web Developer", price: "0" },
                { imgSrc: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/4670/PMP20000317623/full_image-1.jpeg", name: "Producto 3", description: "Online Teacher", price: "0" },
                { imgSrc: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/4670/PMP20000317623/full_image-1.jpeg", name: "Producto 4", description: "Freelancer", price: "0" },
                { imgSrc: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/4670/PMP20000317623/full_image-1.jpeg", name: "Producto 5", description: "Bank Manager", price: "0" },
                { imgSrc: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/4670/PMP20000317623/full_image-1.jpeg", name: "Producto 6", description: "App Designer", price: "0" },
            ]
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
        }
    },
    mounted() {
        const wrapper = this.$refs.carousel;
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
};
</script>

<style scoped>
@import url('./Recommendations.css');
</style>