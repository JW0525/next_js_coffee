import { NextApiRequest, NextApiResponse } from "next";
import connectDB from '../database/connection';
import { CategoryList } from '../database/schema';
import data from './data'

export default function get_Users(req: NextApiRequest, res: NextApiResponse) {
  const { categoryList } = data;

  connectDB().catch(error => console.error(error));
  // if(data) {
  //   return res.status(200).json(categoryList);
  // } else {
  //   return res.status(400).json({error: "Data Not Found"});
  // }

  const create = new CategoryList({ categoryList });
  create.save().then(() => {
    res.status(200).json(create);
  })

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