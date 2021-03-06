import {Producto} from "../models/prods.model.js";

export async function createProduct(req, res) {
    const { nombre, codigo, descripcion, precio, foto, stock } = req.body;
    try {
      const newProduct = new Producto({nombre, codigo, descripcion, precio, foto, stock})
      await newProduct.save()
      res.status(200).send("Producto creado");
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  export async function getProducts(req, res) {
    try {
      const productos = await Producto.find();
      res.status(200).json({ productos });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }

  export async function getProductById(req, res) {
    const {id} = req.params
    try {
      const producto = await Producto.findById(id)
      res.status(200).json({ producto });
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  export async function deleteProduct(req, res) {
      const {id} = req.params
      try {
          await Producto.findByIdAndDelete(id)
          res.status(200).send('Producto eliminado')
      } catch (error) {
          res.status(400).send(error.message);
      }
  }
  
  export async function updateProduct(req, res)  {
      const {id} = req.params
      const {body} = req
  
      try {
          await Producto.findByIdAndUpdate(id, body)
          res.status(200).send('Producto actualizado')
      } catch (error) {
          res.status(400).send(error.message);
      }
  }