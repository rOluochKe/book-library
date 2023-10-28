import React from 'react';
import Table from '@/app/components/Table';
import HeadingThree from '../components/HeadingThree';
import { borrowsData } from '../api/borrows';

export default function Borrows() {
  const columns = ['borrow_id', 'book_id', 'borrower_id'];

  return (
    <main className='container mx-auto'>
      <HeadingThree title='Borrows' />
      <Table data={borrowsData} columns={columns} context={'borrows'} />
    </main>
  );
}
