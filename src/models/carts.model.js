import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    cartProducts: [
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
        },
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Productos",
        },
      },
    ],
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Carritos", cartSchema);
