import { cartsService } from "../services/index.js";

export async function createCart(req, res) {
  const { body } = req;
  try {
    const cart = await cartsService.createCart(body);
    res.status(200).json(cart.id);
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

export async function deleteCart(req, res) {
  const { id } = req.params;
  try {
    const deletedCart = await cartsService.deleteCart(id);
    res.status(200).json({ deletedCart });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function postProdsCart(req, res) {
  const {cartId} = req.params;
  const {productId} = req.body;
  try {
    const updatedCart = await cartsService.postProdsCart(cartId, productId);
    //res.status(200).send("Producto añadido");
    res.status(200).json(updatedCart)
  } catch (error) {
    res.status(400).send(error.message);
  }
}


export async function deleteProductCart(req, res) {
  const cartId = { _id: req.params.id };
  const productId = { _id: req.params.id_prod };

  try {
    await cartsService.deleteProductCart(cartId, productId);
    res.status(200).send("Producto eliminado");
  } catch (error) {
    res.status(400).send(error.message);
  }
}
