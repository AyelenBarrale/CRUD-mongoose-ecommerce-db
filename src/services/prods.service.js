import { prodsModel } from "../models/index.js";

export async function getProducts() {
  try {
    const productos = await prodsModel.default.find();
    return productos;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductById(id) {
  try {
    const producto = await prodsModel.default.findOne({id});
    return producto;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createProduct(data) {
  try {
    await prodsModel.default.create(data);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteProduct(id) {
  try {
    await prodsModel.default.findOneAndDelete(id);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateProduct(id, data) {
  try {
    await prodsModel.default.findByIdAndUpdate(id, data, {
      new: true,
      upsert: true,
    });
    return;
  } catch (error) {
    throw new Error(error);
  }
}
