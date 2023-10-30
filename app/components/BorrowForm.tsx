import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BorrowFormData } from '../types/Borrow';

interface BorrowFormProps {
  onSubmit: SubmitHandler<BorrowFormData>;
  defaultValues?: BorrowFormData;
}

const borrowSchema = yup.object().shape({
  borrow_id: yup.number().required('Borrow ID is required'),
  book_id: yup.number().required('Book ID is required'),
  borrower: yup.string().required('Borrower name is required'),
});

const BorrowForm: React.FC<BorrowFormProps> = ({ onSubmit, defaultValues }) => {
  const { control, handleSubmit, formState } = useForm<BorrowFormData>({
    resolver: yupResolver(borrowSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block w-full mb-1">Borrow ID</label>
        <Controller
          name="borrow_id"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="number"
                className="input w-full border border-gray-300 rounded p-2" />
              {fieldState.error && <p className="error-text text-red-600">{fieldState.error.message}</p>}
            </>
          )}
        />
      </div>

      <div>
        <label className="block w-full mb-1">Book ID</label>
        <Controller
          name="book_id"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="number"
              className="input w-full border border-gray-300 rounded p-2" />
              {fieldState.error && <p className="error-text text-red-600">{fieldState.error.message}</p>}
            </>
          )}
        />
      </div>

      <div>
        <label className="block w-full mb-1">Borrower</label>
        <Controller
          name="borrower"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field}
                className="input w-full border border-gray-300 rounded p-2" />
              {fieldState.error && <p className="error-text text-red-600">{fieldState.error.message}</p>}
            </>
          )}
        />
      </div>

      <button type="submit"
        className="mr-2 bg-blue-500 text-white px-4 py-1 rounded"
        disabled={formState.isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default BorrowForm;
