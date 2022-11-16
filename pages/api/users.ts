import { NextApiRequest, NextApiResponse } from "next";
import connectDB from '../database/connectDB';
import { CategoryList } from '../database/schema';
import data from './data'
import {MongoClient} from "mongodb";
import nextConnect from "next-connect";
import {getDatabase} from "@/middlewares/database";
import nc from "next-connect";

export default function get_Users(req: NextApiRequest, res: NextApiResponse) {
  const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI;
  const client = new MongoClient(MONGODB_URI as string);

  // connectDB().catch(error => console.error(error));

  const handler = nc();
  handler.use(getDatabase).post<any, NextApiResponse>(async (req, res) => {
    // ex) await req.db.client....
    res.status(200).json({
      hasConnection: req.db.client != null
    });
  })




  // database and collection code goes here
  // const db = client.db("test");
  // const collection = db.collection("data-category-lists");
  //
  // let data = collection.find();
  // if (data) {
  //   return res.status(200).json(data);
  // } else {
  //   return res.status(400).json({error: "Data Not Found"});
  // }

  // if (data) {
  //   return res.status(200).json(data);
  // } else {
  //   return res.status(400).json({error: "Data Not Found"});
  // }

  // const { method } = req;
  // switch(method) {
  //   case 'GET':
  //     res.status(200).json({ method: 'GET', endpoint: 'Users' });
  //     break;
  //   case 'POST':
  //     res.status(200).json({ method: 'POST', endpoint: 'Users' });
  //     break;
  //   default:
  //     res.setHeader('Allow', ['GET', 'POST'])
  //     res.status(405).end(`Method ${method} Not Allowed`)
  //     break;
  // }
}