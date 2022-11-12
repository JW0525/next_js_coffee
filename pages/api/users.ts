import { NextApiRequest, NextApiResponse } from "next";
import main from '../database/connection';
import Kitten from '../database/schema';

export default function get_Users(req: NextApiRequest, res: NextApiResponse) {
  main().catch(error => console.error(error));

  const { method } = req;
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

  // res.status(200).json([
  //   {id: 1, name: "John Smith"},
  //   {id: 2, name: "Samuel"}
  // ])



  const create = new Kitten({
    id: 2, name: "Samuel"
  });
  create.save().then(() => {
    res.status(200).json(create)
  })
}