import mongoose from 'mongoose';

export const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;
const connection = {};

const connectDB = async () => {
  // @ts-ignore
  if (connection.isConnected) return;

  const db = await mongoose.connect(MONGODB_URI as string);
  // @ts-ignore
  connection.isConnected = db.connections[0].readyState;

  return db
}
export default connectDB;