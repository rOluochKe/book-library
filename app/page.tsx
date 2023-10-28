import React from 'react';
import Table from '@/app/components/Table';
import HeadingThree from './components/HeadingThree';
import { booksData } from './api/books';

export default function Home() {
  const columns = ['book_id', 'title', 'author', 'year'];

  return (
    <main className='container mx-auto'>
      <HeadingThree title='Books' />
      <Table data={booksData} columns={columns} context={'books'} />
    </main>
  )
}
