import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    `Connection to Mongodb Database ${conn.connection.host}`.bgMagenta.white;
  } catch (error) {
    `Error in MongoDB ${error}`.bgRed.white;
  }
};
export default connectDB;
