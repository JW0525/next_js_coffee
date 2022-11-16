import { NextApiRequest, NextApiResponse } from "next";
import connectDB from '../database/connectDB';
import { CategoryList } from '../database/schema';

export default async function get_Users(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  connectDB().catch(error => console.error(error));

  // switch(method) {
  //   case 'GET':
  //     try {
  //       const data = await CategoryList.find({})
  //       res.status(200).json({ method: 'GET', status: true, data });
  //     } catch (err) {
  //       res.status(400).json({ status: false })
  //     }
  //     break;
  //   case 'POST':
  //     const data = await CategoryList.create(req.body)
  //     try {
  //       res.status(201).json({ method: 'POST', status: true, data })
  //     } catch (err) {
  //       res.status(400).json({ status: false })
  //     }
  //     break;
  //   default:
  //     res.status(400).json({ status: false })
  //     break;
  // }
}