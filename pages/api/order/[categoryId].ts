import { NextApiRequest, NextApiResponse } from 'next';
import { CategoryList } from '../database/model';

export default async function getIdData(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { categoryId } = req.query;
  const data = await CategoryList.find({}).limit(1);

  switch (req.method) {
    case 'GET':
      try {
        const { categoryList } = data[0];
        // const category = categoryList.find((value: any) => value.id.toString() === categoryId);
        res.status(200).json(categoryList);
      } catch (err) {
        res.status(400).json({ status: false });
      }
      break;
    default:
      res.status(400).json({ status: false });
      break;
  }
}