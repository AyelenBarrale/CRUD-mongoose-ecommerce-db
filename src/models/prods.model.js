import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productoSchema = new Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    codigo: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    foto: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    }/* ,
    cartId: {
      type: Schema.Types.ObjectId,
      ref: "Carrito",
    }, */
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Producto", productoSchema);
