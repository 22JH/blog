import mongoose from "mongoose";

let isConnected = false;
export const connectToDB = async () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  if (!process.env.MONGODB_URI) return console.log("Missing MongoDB URL");

  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
