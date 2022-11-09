import mongoose from 'mongoose';

const { NEXT_PUBLIC_MONGODB_URI } = process.env;

const main = async () => {
  await mongoose.connect(NEXT_PUBLIC_MONGODB_URI as string);
  console.log("Database Connected");
}

export default main;