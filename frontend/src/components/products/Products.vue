<script setup>
import { ref, onMounted, computed } from 'vue';
import { obtenerProductos } from '../../utils/products/products.api.js';

const productos = ref([]);
const selectedCategory = ref('ALL');
const searchQuery = ref('');

const fetchProductos = async () => {
  productos.value = await obtenerProductos();
};

onMounted(() => {
  fetchProductos();
});

const normalizeString = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};

const filteredProductos = computed(() => {
  let filtered = productos.value;

  if (selectedCategory.value !== 'ALL') {
    filtered = filtered.filter(producto => producto.category === selectedCategory.value);
  }

  if (searchQuery.value) {
    const query = normalizeString(searchQuery.value);
    filtered = filtered.filter(producto => normalizeString(producto.name).includes(query));
  }

  return filtered;
});

const createWhatsAppLink = (producto) => {
  const phoneNumber = '+51904738133';
  const message = `Hola, he visto el producto ${producto.name} con el precio S/.${producto.price}. Quisiera comprarlo.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
};
</script>

<template>
  <div class="gen-products">
    <h1>Productos</h1>
    <div class="filter-container">
      <div>
        <label for="categoryFilter">Filtrar por Categoria:</label>
        <select id="categoryFilter" v-model="selectedCategory">
          <option value="ALL">Todas</option>
          <option v-for="category in [...new Set(productos.map(producto => producto.category))]" :key="category" :value="category">{{ category }}</option>
        </select>
      </div>
      <div>
        <label for="searchQuery">Buscar Por Nombre:</label>
        <input type="text" id="searchQuery" placeholder="Ingrese el nombre" v-model="searchQuery">
      </div>
    </div>
    <div class="cont-products">
      <div v-for="producto in filteredProductos" :key="producto._id" class="products-card">
        <div class="img">
          <img :src="producto.images[0]" alt="img">
        </div>
        <div class="products-details">
          <h3>{{ producto.brand }}</h3>
          <h1>{{ producto.name }}</h1>
          <h2>S/.{{ producto.price }}</h2>
          <router-link :to="`details-product/${producto._id}`">
            <button class="details">Ver Detalles</button>
          </router-link>
          <a :href="createWhatsAppLink(producto)" target="_blank">
            <button class="contact">Comprar <i class="fa fa-whatsapp"></i></button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('./Products.css');
</style>
