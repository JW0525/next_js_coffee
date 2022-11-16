import mongoose from 'mongoose';

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;

const connectDB = async () => {
  await mongoose.connect(MONGODB_URI as string);
}

export default connectDB;