import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: request.body })
}