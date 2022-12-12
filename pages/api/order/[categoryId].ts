import { NextApiRequest, NextApiResponse } from "next";
import {CategoryList} from "../../../database/model";

export default async function get_IdData(req: NextApiRequest, res: NextApiResponse) {
  const { categoryId } = req.query;
  const data = await CategoryList.find({}, {_id:0}).limit(1)

  if (categoryId && data) {
    const { categoryList } = data[0];
    const category = categoryList.find((value: any) => (value.id).toString() === categoryId);
    return res.status(200).json(category);
  } else {
    return res.status(400).json({error: "Data Not Found"})
  }
}