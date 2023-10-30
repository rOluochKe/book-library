import { NextApiRequest, NextApiResponse } from 'next';
import { Borrow } from '../types/Borrow';

export const borrowsData: Borrow[] = [
  { borrow_id: 1, book_id: 1, borrower: 'John Doe' },
  { borrow_id: 2, book_id: 2, borrower: 'Nancy Omino' },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ borrows: borrowsData });
};
