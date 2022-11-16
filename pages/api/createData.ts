import { NextApiRequest, NextApiResponse } from "next";
import nc from 'next-connect';
import connectDB from '../database/connectDB';
import { CategoryList } from '../database/schema';
import data from './data'

export default function get_Users(req: NextApiRequest, res: NextApiResponse) {
  const { categoryList } = data;
  // if(data) {
  //   return res.status(200).json(categoryList);
  // } else {
  //   return res.status(400).json({error: "Data Not Found"});
  // }

  connectDB().catch(error => console.error(error));

  const handler = nc();


  const create = new CategoryList({ categoryList });
  create.save().then(() => {
    res.status(200).json(create);
  })

}