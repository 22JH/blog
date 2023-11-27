import mongoose from "mongoose";

export const connectToDB = async () => {
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }
  if (!process.env.MONGODB_URI) return console.log("Missing MongoDB URL");

  if (mongoose.connection.readyState !== 1) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB connected");
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("MongoDB connection already established");
    return;
  }
};
