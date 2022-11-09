import mongoose from 'mongoose';

const { MONGODB_URI } = process.env;

const main = async () => {
  await mongoose.connect(MONGODB_URI as string);
  console.log("Database Connected");
}

export default main;