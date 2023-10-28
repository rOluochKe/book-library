import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface BorrowFormProps {
  onSubmit: SubmitHandler<BorrowFormData>;
  defaultValues?: BorrowFormData;
}

interface BorrowFormData {
  borrow_id: number;
  book_id: number;
  borrower_id: number;
}

const borrowSchema = yup.object().shape({
  borrow_id: yup.number().required('Borrow ID is required'),
  book_id: yup.number().required('Book ID is required'),
  borrower_id: yup.number().required('Borrower ID is required').integer().positive(),
});

const BorrowForm: React.FC<BorrowFormProps> = ({ onSubmit, defaultValues }) => {
  const { control, handleSubmit, formState } = useForm<BorrowFormData>({
    resolver: yupResolver(borrowSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label>Borrow ID</label>
        <Controller
          name="borrow_id"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="number" className="input" />
              {fieldState.error && <p className="error-text">{fieldState.error.message}</p>}
            </>
          )}
        />
      </div>

      <div>
        <label>Book ID</label>
        <Controller
          name="book_id"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="number" className="input" />
              {fieldState.error && <p className="error-text">{fieldState.error.message}</p>}
            </>
          )}
        />
      </div>

      <div>
        <label>Borrower ID</label>
        <Controller
          name="borrower_id"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} type="number" className="input" />
              {fieldState.error && <p className="error-text">{fieldState.error.message}</p>}
            </>
          )}
        />
      </div>

      <button type="submit" className="btn-primary" disabled={formState.isSubmitting}>
        Save
      </button>
    </form>
  );
};

export default BorrowForm;
