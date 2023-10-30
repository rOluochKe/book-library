import React from 'react';
import Table from '@/app/components/Table';
import HeadingThree from '../components/HeadingThree';
import { borrowsData } from '../api/borrows';

export default function Borrows() {
  const columns = ['borrow_id', 'book_id', 'borrower'];

  return (
    <main className='container mx-auto'>
      <HeadingThree title='Borrowing' />
      <Table data={borrowsData} columns={columns} context={'borrows'} />
    </main>
  );
}
