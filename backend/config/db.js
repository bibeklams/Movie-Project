import mongoose from "mongoose";

const mongoDb = async () => {
  try {
    console.log("MONGO_URL =", process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
export default mongoDb;
