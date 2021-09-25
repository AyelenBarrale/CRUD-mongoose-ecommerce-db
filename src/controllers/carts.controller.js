import { cartsService } from "../services/index.js";

export async function createCart(req, res) {
  const { body } = req;
  try {
    const cart = await cartsService.createCart(body);
    //res.status(200).send(`Carrito de ${body.userName} creado`);
    res.status(200).json(cart.id)
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteCart(req, res) {
  const { id } = req.params;
  try {
    await cartsService.deleteCart(id);
    res.status(200).send("Carrito eliminado");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function postProdsCart(req, res) {
  const { cartId } = req.params;
  const { productId } = req.body;
  try {
    await cartsService.postProdsCart(cartId, productId);
    res.status(200).send("Producto añadido");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function getCart(req, res) {
  const { cartId } = req.params;
  try {
    const cart = await cartsService.getCart(cartId);
    res.status(200).json({ cart });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function deleteProductCart(req, res) {
  const cartId = {_id: req.params.id}
  console.log(cartId)
  const productId = {_id: req.params.id_prod}
  console.log(productId)
  try {
    await cartsService.deleteProductCart(cartId, productId);
    res.status(200).send("Producto eliminado");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
