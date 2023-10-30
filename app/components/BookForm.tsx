import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { BookFormData } from '../types/Book';

interface BookFormProps {
  onSubmit: SubmitHandler<BookFormData>;
  defaultValues?: BookFormData;
}

const bookSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  author: yup.string().required('Author is required'),
  year: yup.number().required('Year is required').integer().positive().max(new Date().getFullYear()),
});

const BookForm: React.FC<BookFormProps> = ({ onSubmit, defaultValues }) => {
  const { control, handleSubmit, formState } = useForm<BookFormData>({
    resolver: yupResolver(bookSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block w-full mb-1">Title</label>
        <Controller
          name="title"
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

      <div>
        <label className='block w-full mb-1'>Author</label>
        <Controller
          name="author"
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

      <div>
        <label className='block w-full mb-1'>Year</label>
        <Controller
          name="year"
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

      <button
        type="submit"
        className="mr-2 bg-blue-500 text-white px-4 py-1 rounded"
        disabled={formState.isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

export default BookForm;
