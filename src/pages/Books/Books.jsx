import { use } from 'react';
import { BookCard } from './BookCard';

export const Books = ({ getBooks }) => {
  const data = use(getBooks);


  return (

      <div className="grid lg:grid-cols-4 md:grid-cols-2 items-center w-full mx-auto gap-x-6  gap-y-9  my-11">
        {data.map(book => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>

  );
};
 