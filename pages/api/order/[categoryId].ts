import { NextApiRequest, NextApiResponse } from "next";
import {CategoryList} from "../database/model";
import connectDB from "../database/connectDB";

export default async function get_IdData(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  connectDB().catch(error => console.error(error));

  const { categoryId } = req.query;
  const data = await CategoryList.find({}, {_id:0}).limit(1);

  const { method } = req;
  switch(method) {
    case 'GET':
      try {
        const { categoryList } = data[0];
        const category = categoryList.find((value: any) => (value.id).toString() === categoryId);
        res.status(200).json(category);
      } catch (err) {
        res.status(400).json({ status: false })
      }
      break;
    default:
      res.status(400).json({ status: false })
      break;
  }
}