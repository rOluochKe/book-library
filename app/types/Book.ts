export interface Book {
  book_id: number;
  title: string;
  author: string;
  year: number;
}

export interface BookFormData {
  title: string;
  author: string;
  year: number;
}