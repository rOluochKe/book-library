import React from 'react';

interface ViewDetailProps<T> {
  data: T;
  context: 'books' | 'borrows';
  onClose: () => void;
}

const ViewDetail: React.FC<ViewDetailProps<any>> = ({ data, context, onClose }) => {
  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">
        {`Details of ${context === 'books' ? 'Book' : 'Borrow'}`}
      </h2>

      {context === 'books' && (
        <div>
          <p>Title: {data.title}</p>
          <p>Author: {data.author}</p>
          <p>Year: {data.year}</p>
        </div>
      )}

      {context === 'borrows' && (
        <div>
          <p>Borrow ID: {data.borrow_id}</p>
          <p>Book ID: {data.book_id}</p>
          <p>Borrower ID: {data.borrower_id}</p>
        </div>
      )}

      <button
        onClick={onClose}
        className="bg-blue-500 text-white px-2 py-1 rounded mt-4"
      >
        Close
      </button>
    </div>
  );
};

export default ViewDetail;
