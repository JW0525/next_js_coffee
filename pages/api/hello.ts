import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  [key: string]: string
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ name: 'John Doe' })
}
