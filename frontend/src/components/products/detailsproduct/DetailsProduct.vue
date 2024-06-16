<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { obtenerProductoPorId } from '../../../utils/products/products.api.js';
import Recommendations from '../../Home/recommendations/Recommendations.vue'

const route = useRoute();
const router = useRouter();
const _id = ref(route.params._id);
const producto = ref({});

const fetchProducto = async (id) => {
    producto.value = await obtenerProductoPorId(id);
};

onMounted(() => {
    fetchProducto(_id.value);
});

watch(producto, (newProducto) => {
    if (newProducto.images && newProducto.images.length > 0) {
        setImage(newProducto.images[0]);
        images.value = newProducto.images;
    }
}, { immediate: true });

const mainImage = ref('');
const quantity = ref(1);
const images = ref([]);

const setImage = (img) => {
    mainImage.value = img;
};

const incrementQuantity = () => {
    quantity.value++;
};

const decrementQuantity = () => {
    if (quantity.value > 1) {
        quantity.value--;
    }
};
const createWhatsAppLink = (producto) => {
    const phoneNumber = '+51904738133';
    const message = `Hola, he visto el producto ${producto.name} con el precio S/.${producto.price}. Quisiera comprar ${quantity.value}, ya  que me encanto...`;
    const encodedMessage = encodeURIComponent(message);
    return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
};
</script>

<template>
    <section class="body">
        <div class="container flex">
            <div class="left">
                <div class="main_image">
                    <img :src="mainImage" class="slide" />
                </div>
                <div class="option flex">
                    <img v-for="img in images" :src="img" :key="img" @click="setImage(img)" />
                </div>
            </div>
            <div class="right">
                <h3>{{ producto.name }}</h3>
                <h4> <small>S/.</small>{{ producto.price }} </h4>
                <p>{{ producto.description }}</p>
                <h5>Color-Rose Gold</h5>
                <div class="color flex1">
                    <span v-for="i in 7" :key="i"></span>
                </div>
                <h5>Cantidad</h5>
                <div class="add flex1">
                    <span @click="decrementQuantity">-</span>
                    <label>{{ quantity }}</label>
                    <span @click="incrementQuantity">+</span>
                </div>
                <a :href="createWhatsAppLink(producto)" target="_blank">
                    <button class="contact">Comprar <i class="fa fa-whatsapp"></i></button>
                </a>
            </div>
        </div>
    </section>
    <div>
        <!-- <Recommendations /> -->
    </div>
</template>

<style scoped>
@import url('./DetailsProduct.css');
</style>
