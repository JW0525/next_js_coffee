import { NextApiRequest, NextApiResponse } from "next";
import nc from 'next-connect';
import connectDB from '../../database/connectDB';
import { CategoryList } from '../../database/model';
import data from './data'

export default function get_Users(req: NextApiRequest, res: NextApiResponse) {
  connectDB().catch(error => console.error(error));

  const { categoryList } = data;
  const create = new CategoryList({ categoryList });
  create.save().then(() => {
    res.status(200).json(create);
  })
}