import { NextApiRequest, NextApiResponse } from 'next';

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  // Delay to make it easier to implement loading screen
  setTimeout(() => {
    res.status(200).json([{ id: 1, name: 'Sjoerd' }, { id: 2, name: 'John' }])
  }, 3000);
}

export default handler
