import React, { Suspense } from 'react';
import { Banner } from '../../components/Banner/Banner';
import { Books } from '../Books/Books';

const fetchBooks = fetch('/data/booksData.json').then(res => res.json());

export const Home = () => {
  return (
    <>
      <Banner />
      <Suspense fallback={<p>Loading....</p>}>
        <Books getBooks={fetchBooks}> </Books>
      </Suspense>
    </>
  );
};
