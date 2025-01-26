import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected:${conn.connection.host}`);
  } catch (err) {
    console.log("Error connection to MongoDB:", err.message);
    process.exit(1); //1 is failure, 0 is success
  }
};
