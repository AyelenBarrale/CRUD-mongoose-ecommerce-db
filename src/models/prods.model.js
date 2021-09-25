import mongoose from "mongoose";

const prodSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      require: true,
    },
    codigo: {
      type: String,
      require: true,
    },
    descripcion: {
      type: String,
      require: true,
    },
    precio: {
      type: Number,
      require: true,
    },
    foto: {
      type: String,
      require: true,
    },
    stock: {
      type: Number,
      require: true,
    }
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Productos", prodSchema);
