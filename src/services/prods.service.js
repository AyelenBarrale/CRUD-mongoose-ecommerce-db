import Producto from '../models/prods.model.js'

export async function getProducts() {
  try {
    const productos = await Producto.find();
    return productos;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductById(id) {
  try {
    const producto = await Producto.findOne({id});
    return producto;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createProduct(data) {
  try {
    await Producto.create(data);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteProduct(id) {
  try {
    await Producto.findOneAndDelete(id);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateProduct(id, data) {
  try {
    await Producto.findByIdAndUpdate(id, data, {
      new: true,
      upsert: true,
    });
    return;
  } catch (error) {
    throw new Error(error);
  }
}
