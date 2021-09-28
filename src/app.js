import express from "express";
import cors from "cors";
import { prodsRouter, cartsRouter } from "./routers/index.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", prodsRouter.router);
app.use("/api/carrito", cartsRouter.router);

export { app };
