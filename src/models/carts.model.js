import mongoose from "mongoose";

let cartItem = new mongoose.Schema(
  {
    productId: {
      ref: "producto",
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);

const cartSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    cartProducts: [cartItem],
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
  {
    collection: "carritos",
  }
);


export default mongoose.model("carrito", cartSchema);
