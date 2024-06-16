import axios from 'axios';
import { apiUrl } from '@/utils/api.js';

// Configuración de Axios
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Obtener todos los productos
export const obtenerProductos = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Crear un nuevo producto
export const crearProducto = async (producto) => {
  try {
    const response = await api.post('/', producto);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
};

// Obtener un producto por su ID
export const obtenerProductoPorId = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return null;
  }
};

// Actualizar un producto por su ID
export const actualizarProductoPorId = async (id, producto) => {
  try {
    const response = await api.put(`/${id}`, producto);
    return response.data;
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error);
    return null;
  }
};

// Eliminar un producto por su ID
export const eliminarProductoPorId = async (id) => {
  try {
    await api.delete(`/${id}`);
    return true;
  } catch (error) {
    console.error(`Error deleting product with id ${id}:`, error);
    return false;
  }
};
