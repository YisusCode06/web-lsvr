import express from 'express';
import {createProduct,deleteProductById,getAllProducts,getProductById,updateProductById} from '../controllers/product.controller.js';

const routerProduct = express.Router();

routerProduct.get('/products',getAllProducts);

routerProduct.get('/products/:id',getProductById);

routerProduct.post('/products',createProduct);

routerProduct.put('/products/:id',updateProductById);

routerProduct.delete('/products/:id',deleteProductById);

export default routerProduct;
