import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, res: NextApiResponse) => {
    console.log(request);
  res.status(200).json({ text: request.body })
}