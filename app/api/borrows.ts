import { NextApiRequest, NextApiResponse } from 'next';
import { Borrow } from '../types/Borrow';

export const borrowsData: Borrow[] = [
  { borrow_id: 1, book_id: 1, borrower_id: 101 },
  { borrow_id: 2, book_id: 2, borrower_id: 102 },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ borrows: borrowsData });
};
