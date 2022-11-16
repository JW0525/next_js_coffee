import { NextApiRequest, NextApiResponse } from "next";
import data from '../data'
import { CategoryList } from "../../database/schema";
import connectDB from "../../database/connection";

export default function get_Menu(req: NextApiRequest, res: NextApiResponse) {
  const { categoryList } = data;

  // if (data) {
  //   return res.status(200).json(categoryList)
  // } else {
  //   return res.status(400).json({error: "Data Not Found"});
  // }
  connectDB().catch(error => console.error(error));

  const create = new CategoryList({ categoryList });
  create.save().then(() => {
    res.status(200).json(create);
  })
}