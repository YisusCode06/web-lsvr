import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config"; //Para usar .env
//conexion a bd
import "./database/connectbd.js";

//importar rutas
import routerProduct from './routes/product.route.js';

//definicion de la api
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());

//para cookies
app.use(cookieParser());
app.use(cors());

//llamar rutas
app.use('/api/v1/', routerProduct);

//Ejecutar el api
app.listen(PORT, () => {
    console.log("Running: " + PORT);
});
