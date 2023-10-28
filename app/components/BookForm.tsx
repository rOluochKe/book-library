import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface BookFormProps {
  onSubmit: SubmitHandler<BookFormData>;
  defaultValues?: BookFormData;
}

interface BookFormData {
  title: string;
  author: string;
  year: number;
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
        <label>Title</label>
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} className="input" />
              {fieldState.error && <p className="error-text">{fieldState.error.message}</p>}
            </>
          )}
        />
      </div>

      <div>
        <label>Author</label>
        <Controller
          name="author"
          control={control}
          render={({ field, fieldState }) => (
            <>
              <input {...field} className="input" />
              {fieldState.error && <p className="error-text">{fieldState.error.message}</p>}
            </>
          )}
        />
      </div>

      <div>
        <label>Year</label>
        <Controller
          name="year"
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

export default BookForm;
