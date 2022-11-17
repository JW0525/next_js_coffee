import { NextApiRequest, NextApiResponse } from "next";
import { CategoryList } from "../../database/model";
import connectDB from "../../database/connectDB";

export default async function get_Menu(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  connectDB().catch(error => console.error(error));

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