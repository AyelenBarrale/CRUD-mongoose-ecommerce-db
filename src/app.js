import express from "express";
import cors from "cors";
import morgan from "morgan";
import { prodsRouter, cartsRouter } from "./routers/index.js";
//import Carrito from "./models/carts.model.js"

// Initializations
const app = express();

// middlewares
app.use(cors());
app.use(morgan("start"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/* app.use((req, res, next) => {
  Carrito.findById("6158bbc6c24ba362e12c03d4")
    .then((carrito) => {
      req.carrito = carrito;
      next();
    })
    .catch((err) => console.log(err));
}); */

// routes
app.use("/api/productos", prodsRouter.router);
app.use("/api/carrito", cartsRouter.router);

export { app };
