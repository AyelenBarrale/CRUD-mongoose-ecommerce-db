import mongoose from "mongoose";

const Schema = mongoose.Schema;

const carritoSchema = new Schema(
  {
    userName: {
      type: String,
      required: true
    },
    productos: [{
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product"/* ,
          quantity: {
            type: Number,
          } */
        }
      }],
    modifiedOn: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);


export default mongoose.model("Carrito", carritoSchema);



