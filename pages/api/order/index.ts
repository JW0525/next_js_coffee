import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../database/connectDB";
import { CategoryList } from "../../database/model";

export default async function get_Menu(req: NextApiRequest, res: NextApiResponse) {
  connectDB().catch(error => console.error(error));

  const { method } = req;
  switch(method) {
    case 'GET':
      try {
        const data = await CategoryList.find({}, {_id:0})
        res.status(200).json(data);
      } catch (err) {
        res.status(400).json({ status: false })
      }
      break;
    case 'POST':
      const data = await CategoryList.create(req.body)
      try {
        res.status(201).json({ method: 'POST', status: true, data })
      } catch (err) {
        res.status(400).json({ status: false })
      }
      break;
    default:
      res.status(400).json({ status: false })
      break;
  }
}