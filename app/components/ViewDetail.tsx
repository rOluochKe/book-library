import React from 'react';
import Paragraph from './Paragraph';

interface ViewDetailProps<T> {
  data: T;
  context: 'books' | 'borrows';
  onClose: () => void;
}

const ViewDetail: React.FC<ViewDetailProps<any>> = ({ data, context }) => {
  return (
    <div className="bg-white rounded">
      {context === 'books' && (
        <div>
          <div className='mb-4'>
            <Paragraph name='Title' property={data.title} />
            <Paragraph name='Author' property={data.author} />
            <Paragraph name='Year' property={data.year} />
          </div>

          <div>
            <h3 className='font-medium mb-2'>This book has been borrowed by:</h3>
            <ol>
              <li>John Doe</li>
            </ol>
          </div>
        </div>
      )}

      {context === 'borrows' && (
        <div>
          <Paragraph name='Borrow ID' property={data.borrow_id} />
          <Paragraph name='Book ID' property={data.book_id} />
          <Paragraph name='Borrower' property={data.borrower} />
        </div>
      )}
    </div>
  );
};

export default ViewDetail;
