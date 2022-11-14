import { NextApiRequest, NextApiResponse } from "next";
import data from '../data'
import {CategoryList} from "../../database/schema";

export default function get_Menu(req: NextApiRequest, res: NextApiResponse) {
  // if(data) res.status(200).json(categoryList);
  // return res.status(400).json({error: "Data Not Found"})

  const { categoryList } = data;
  // const create = new CategoryList({ categoryList });
  // create.save().then(() => {
  //   res.status(200).json(create);
  // })
}