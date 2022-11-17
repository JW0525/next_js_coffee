import { NextApiRequest, NextApiResponse } from "next";
import { CategoryList } from "../../database/model";
import connectDB from "../../database/connectDB";
import { MongoClient } from "mongodb";
const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;


export default async function get_Menu(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await connectDB().catch(error => console.error(error));
  //
  // const clientPromise = new MongoClient(MONGODB_URI as string).connect();
  //
  // const client = await clientPromise;
  // const db = client.db('test');
  // const posts = await db.collection('categorylists').find({});
  //
  // const post = await db.collection('categorylists').findOne({
  //   _id: "6375622089febe96dc8223a6",
  // });


  // const data = await CategoryList.find({});
  // const data = await CategoryList.findOne()

  // res.status(200).json(data);

}