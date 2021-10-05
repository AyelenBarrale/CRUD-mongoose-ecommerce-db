import express from "express";
import cors from "cors";
import morgan from "morgan";
import { prodsRouter, cartsRouter } from "./routers/index.js";

// Initializations
const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.use("/api/productos", prodsRouter.router);
app.use("/api/carrito", cartsRouter.router);

export { app };
