import { NextApiRequest, NextApiResponse } from 'next';
import { Book } from '../types/Book';

export const booksData: Book[] = [
  { book_id: 1, title: 'Book 1', author: 'Author A', year: 2022 },
  { book_id: 2, title: 'Book 2', author: 'Author B', year: 2023 },
];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ books: booksData });
};
