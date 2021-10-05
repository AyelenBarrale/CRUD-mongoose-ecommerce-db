import {Carrito} from "../models/carts.model.js";
import {Producto} from "../models/prods.model.js";

export async function createCart(req, res) {
  const { userName } = req.body;
  try {
    const newCarrito = new Carrito({ userName });
    await newCarrito.save();
    res.status(200).json(newCarrito.id);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getCart(req, res) {
  const { id } = req.params;
  try {
    const carrito = await Carrito.findById(id);
    res.status(200).json({ carrito });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteCart(req, res) {
  const { id } = req.params;
  try {
    const deletedCart = await Carrito.findByIdAndDelete(id);
    res.status(200).json({ deletedCart });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function postProdsCart(req, res) {
  const { id } = req.params;
  const prodId = { _id: req.body.id };
  try {
    let carrito = await Carrito.findById(id);
    //console.log(carrito);

    const producto = await Producto.findById(prodId);
    //console.log(producto);

    if (!carrito?.productos?.includes(producto)) {
      carrito.productos.push(producto);
      await carrito.save();
    }

    res.status(200).json({ carrito });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteProductCart(req, res) {
  const cartId = { _id: req.params.id };
  const productId = { _id: req.params.id_prod };

  try {
    let carrito = await Carrito.findById(cartId);
    //console.log(carrito);

    const producto = await Producto.findById(productId);
    //console.log(producto);

    if (carrito.productos.includes(producto)) {
      const updatedCartItems = await carrito.productos.filter(
        (producto) => producto.id !== productId
      );
      carrito.productos = updatedCartItems;
      await carrito.save();

      res.status(200).json({ carrito });
    } else {
      res.status(400).send('el producto no se encuentra en el carrito')
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
}
