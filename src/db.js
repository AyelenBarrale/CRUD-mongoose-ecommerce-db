import dotenv from "dotenv";
import mongoose from "mongoose";
import emoji from "node-emoji";

dotenv.config();

mongoose.connect(process.env.MONGOURI, (err) => {
  if (!err) {
    console.log(emoji.get("fire"), "Conectado a base de datos");
  } else {
    console.log(err);
  }
});

export default mongoose;
