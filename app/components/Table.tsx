"use client";

import React, { useState } from 'react';
import { BiSolidEdit } from 'react-icons/bi';
import { GrView } from 'react-icons/gr';
import { MdDelete } from 'react-icons/md';
import ModalContainer from './ModalContainer';
import BookForm from './BookForm';
import BorrowForm from './BorrowForm';
import ViewDetail from './ViewDetail';
import { BookFormData } from '../types/Book';
import { BorrowFormData } from '../types/Borrow';

interface TableProps<T> {
  data: T[];
  columns: string[];
  context: 'books' | 'borrows';
}

enum ActionType {
  None,
  Add,
  Update,
  ViewDetail,
  Delete,
}

const Table: React.FC<TableProps<any>> = ({ data, columns, context }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);
  const [actionType, setActionType] = useState(ActionType.None);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const openModal = (content: React.ReactNode, action: ActionType) => {
    setIsModalOpen(true);
    setModalContent(content);
    setActionType(action);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setActionType(ActionType.None);
  };

  const confirmDelete = (item: any) => {
    setSelectedItem(item);
    openModal(
      <div>
        <p>Are you sure you want to delete this {context === 'books' ? 'book' : 'borrow'}?</p>
        <div className='flex justify-between items-center mt-3'>
          <button
            className='bg-blue-500 text-white px-2 py-1 rounded'
            onClick={() => deleteItem(item)}>Yes, Delete</button>
          <button
            className='bg-transparent text-black border border-black-600 px-2 py-1 rounded'
            onClick={closeModal}>Cancel</button>
        </div>
      </div>,
      ActionType.Delete
    );
  };

  const deleteItem = (item: any) => {
    // Logic to delete the selected item
    console.log('Deleting the item:', item);

    // You can add your API call or state updates here to delete the item.

    // After successful deletion, close the modal
    closeModal();
  };

  // Define form submission functions for adding a book and a borrow
  const handleBookFormSubmit = (data: BookFormData) => {
    // Logic to handle form submission for adding a book
    console.log('Adding a new book:', data);

    // You can add your API call or state updates here to save the new book.

    // After successful submission, close the modal
    closeModal();
  };

  const handleBorrowFormSubmit = (data: BorrowFormData) => {
    // Logic to handle form submission for adding a borrow
    console.log('Adding a new borrow:', data);

    // You can add your API call or state updates here to save the new borrow.

    // After successful submission, close the modal
    closeModal();
  };

  // Function to handle the ViewDetail action
  const handleViewDetail = (item: any) => {
    setSelectedItem(item);
    openModal(<ViewDetail data={item} context={context} onClose={closeModal} />, ActionType.ViewDetail);
  };

  return (
    <div>
      <div className="my-4">
        <button
          onClick={() => {
            openModal(
              context === 'books' ? <BookForm onSubmit={handleBookFormSubmit} /> : <BorrowForm onSubmit={handleBorrowFormSubmit} />,
              ActionType.Add
            );
          }}
          className="bg-green-500 text-white px-2 py-1 rounded"
        >
          {`Add ${context === 'books' ? 'Book' : 'Borrow'}`}
        </button>
      </div>

      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-4 py-2 text-left border bg-gray-200">
                {column}
              </th>
            ))}
            <th className="px-4 py-2 text-left border bg-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-4 py-2 border">
                  {item[column]}
                </td>
              ))}
              <td className="px-4 py-2 border">
                <button
                  onClick={() => {
                    openModal(
                      context === 'books' ? <BookForm onSubmit={handleBookFormSubmit} defaultValues={item} /> : <BorrowForm onSubmit={handleBorrowFormSubmit} defaultValues={item} />,
                      ActionType.Update
                    );
                  }}
                  className="mr-2 px-2 py-1 rounded"
                >
                  <BiSolidEdit />
                </button>
                <button
                  onClick={() => handleViewDetail(item)}
                  className="mr-2 px-2 py-1 rounded"
                >
                  <GrView />
                </button>
                <button
                  onClick={() => confirmDelete(item)}
                  className="px-2 py-1 rounded"
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalContainer isOpen={isModalOpen} onClose={closeModal} title={getActionTitle(actionType, context)}>
        {modalContent}
      </ModalContainer>
    </div>
  );
};

export default Table;

function getActionTitle(actionType: ActionType, context: 'books' | 'borrows'): string {
  switch (actionType) {
    case ActionType.Add:
      return `Add New ${context === 'books' ? 'Book' : 'Borrow'}`;
    case ActionType.Update:
      return `Update ${context === 'books' ? 'Book' : 'Borrow'}`;
    case ActionType.ViewDetail:
      return `View Detail of ${context === 'books' ? 'Book' : 'Borrow'}`;
    case ActionType.Delete:
      return `Delete ${context === 'books' ? 'Book' : 'Borrow'}`;
    default:
      return '';
  }
}
