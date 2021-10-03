import Carrito from '../models/carts.model.js'
import Producto from '../models/prods.model.js'

export async function createCart(data) {
  try {
    const cart = await Carrito.create(data);
    return cart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCart(cartId) {
  try {
    const cart = await Carrito.findById(cartId);
    if (!cart) throw new Error("Carrito inexistente");
    return cart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteCart(id) {
  try {
    const deletedCart = await Carrito.findByIdAndDelete(id);
    return deletedCart;
  } catch (error) {
    throw new Error(error);
  }
}

export async function postProdsCart(cartId, prodId) {
  try {
    let cart = await Carrito.findById(cartId);
    console.log(cart);

    let producto = await Producto.findById(prodId);
    console.log(producto);
    const cartProductIndex = cart.productos.findIndex((cp) => {
      return cp.productId.toString() === producto._id.toString();
    });
    console.log(cartProductIndex);
    let newQuantity = 1;
    const updatedCartProds = [...cart.productos];

    if (cartProductIndex >= 0) {
      //then product already exists
      newQuantity = cart.productos[cartProductIndex].quantity + 1;
      updatedCartProds[cartProductIndex].quantity = newQuantity;
    } else {
      updatedCartProds.push({ productId: producto, quantity: newQuantity });
    }
    const updatedCart = { productos: updatedCartProds };

    cart = new Carrito({ updatedCart });
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

    const producto = Producto.findById({ productId });

    if (cart?.cartProducts?.includes(producto)) {
      cart.cartProducts.deleteMany(producto);
    }
    await cart.save();
    return cart;
  } catch (error) {
    throw new Error(error);
  }
}
