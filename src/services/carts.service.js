import { cartsModel, prodsModel } from "../models/index.js";

export async function createCart(data) {
  try {
    const cart = await cartsModel.default.create(data);
    return cart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCart(cartId) {
  try {
    const cart = await cartsModel.default.findOne(cartId);
    if (!cart) throw new Error("Carrito inexistente");
    return cart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteCart(id) {
  try {
    const deletedCart = await cartsModel.default.findOneAndDelete(id);
    return deletedCart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function postProdsCart(cartId, productId) {
  try {
    const cart = await getCart(cartId);
    if (!cart) throw new Error("Carrito inexistente");

    const producto = await prodsModel.default.findOne({ productId });

    if (!cart?.cartProducts?.includes(producto)) {
      cart.cartProducts.push(producto);
    } else {
      throw new Error("Este producto ya esta incluido en tu carrito");
    }
    await cart.save();
    return cart;
    
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteProductCart(cartId, productId) {
  try {
    let cart = await getCart(cartId);
    if (!cart) throw new Error("Carrito inexistente");

    const producto = prodsModel.default.findOne({ productId });

    if (cart?.cartProducts?.includes(producto)) {
      cart.cartProducts.deleteMany(producto);
    }
    await cart.save();
    return cart;
  } catch (error) {
    throw new Error(error);
  }
}
