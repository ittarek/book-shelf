import { createBrowserRouter } from 'react-router';
import App from '../App.jsx';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage.jsx';
import { Home } from '../pages/Home/Home.jsx';
import { BookDetails } from '../pages/Books/BookDetails.jsx';
import { Suspense } from 'react';
import { ListedBooks } from '../pages/Books/ListedBooks.jsx';
import { PageToReads } from '../pages/Books/PageToReads.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    HydrateFallback: () => <div>Loading...</div>, // Add this
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/BookDetails/:id',
        element: (
          <Suspense fallback={<p>Loading....</p>}>
            <BookDetails></BookDetails>
          </Suspense>
        ),
        loader: async ({ params }) => {
          try {
            const res = await fetch('/data/booksData.json');
            const data = await res.json();
            const singleBook = data?.find(book => String(book.bookId) === params.id);
            return singleBook || {};
          } catch (error) {
            console.error('Error loading book data:', error);
            throw new Response('Book not found', { status: 404 });
          }
        },
      },
      {
        path: '/listedBooks',
        element: <ListedBooks></ListedBooks>,
        },
        {
            path: "/pageToReads",
            element: <PageToReads/>
      }
    ],
  },
]);
