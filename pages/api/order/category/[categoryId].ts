import data from '../../data'
import {NextApiRequest, NextApiResponse} from "next";

export default function get_CategoryMenu(req: NextApiRequest, res: NextApiResponse) {
  const { categoryId } = req.query;
  const { categoryList } = data;

  if (categoryId) {
    const category = categoryList.find(value => (value.id).toString() === categoryId);
    res.status(200).json(category);
  }
  return res.status(400).json({error: "Data Not Found"})
}