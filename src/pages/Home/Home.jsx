import React, { Suspense } from 'react';
import { Banner } from '../../components/Banner/Banner';
import { Books } from '../Books/Books';
import { Helmet } from 'react-helmet';

const fetchBooks = fetch('/data/booksData.json').then(res => res.json());

export const Home = () => {
  return (
    <>
      {' '}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Shelf | Home</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Banner />
      <Suspense fallback={<p>Loading....</p>}>
        <Books getBooks={fetchBooks}> </Books>
      </Suspense>
    </>
  );
};
