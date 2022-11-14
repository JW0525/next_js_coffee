import mongoose from 'mongoose';

const NEXT_PUBLIC_MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

const connectDB = async () => {
  await mongoose.connect(NEXT_PUBLIC_MONGODB_URI as string);
  console.log("Database Connected");
}
export default connectDB;