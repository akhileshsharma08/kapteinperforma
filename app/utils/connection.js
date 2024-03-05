
import mongoose from "mongoose";

const uri = process.env.NEXT_PUBLIC_MONGO_URI;
console.log(uri,"urii")

const connectMongoDb = () => {
  try {
    mongoose.connect(uri);
    console.log("database connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDb;
