import { ArrowDown, ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';

export const ListedBooks = () => {
  const [sortBy, setSortBy] = useState('');
  const [open, setOpen] = useState(false);
  const [wishlistTab, setWishlistTab] = useState(false);
  const [readTab, setReadTab] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [activeButton, setActiveButton] = useState('read');
  // sorting
  const handleSortChange = e => {
    const value = e.target.value;
    setSortBy(value);
    const type = e.target.value;
    const bookSort = activeButton === 'read' ? [...readBooks] : [...wishlist];
    if (type === 'rating') {
      const sortedReadList = bookSort.sort((a, b) => a.rating - b.rating);
      setReadBooks(sortedReadList);
      setWishlist(sortedReadList);
    }
    if (type === 'pages') {
      const sorted = bookSort.sort((a, b) => a.totalPages - b.totalPages);
      setReadBooks(sorted);
      setWishlist(sorted);
    }
  };
  // Component load হলে default read books load করবে
  useEffect(() => {
    getReadBooks();
  }, []);
  // const getWishlists
  const getWishlist = () => {
    setReadBooks(null);
    setWishlist(JSON.parse(localStorage.getItem('wishlistBooks')));
    setWishlistTab(true);
    setReadTab(false);
    setActiveButton('wishlist');
  };
  const getReadBooks = () => {
    setWishlist(null);
    setReadBooks(JSON.parse(localStorage.getItem('readBooks')));
    setWishlistTab(false);
    setReadTab(true);
    setActiveButton('read');
  };

  return (
    <>
      {' '}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Shelf | Book List</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <p className="text-center text-7xl font-bold mt-2 bg-gray-200 py-3">Books</p>
      <div className="flex justify-center items-center my-11  w-[8vw] mx-auto relative ">
        {/* sorting */}
        <select
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          value={sortBy}
          onChange={handleSortChange}
          className="appearance-none bg-white border-2 border-[#016B61] rounded-lg px-6 py-3 pr-12 text-gray-700 font-medium shadow-md hover:border-[#70B2B2] focus:outline-none focus:ring-4 focus:ring-[#016B61] focus:border-[#70B2B2] cursor-pointer transition-all duration-200">
          <option value="" disabled>
            Sort by
          </option>
          <option onClick={() => handleSortChange('rating')} value="rating">
            Rating
          </option>
          <option value="pages">Number of pages</option>
        </select>
        <div className="absolute  right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
          {open ? (
            <ArrowUp className="w-5 h-5 text-[#016B61]" />
          ) : (
            <ArrowDown className="w-5 h-5 text-[#016B61]" />
          )}
        </div>
      </div>
      {/* books listed */}
      <div className=" md:w-[60vw] px-2 md:px-0 mx-auto ">
        {/* Books Tab */}
        <div className="flex gap-11 mb-6  border-b border-gray-300  relative">
          <button
            onFocus={() => setReadTab(false)}
            onBlur={() => setReadTab(true)}
            onClick={getReadBooks}
            // disabled={activeButton === 'read'}
            className={`cursor-pointer border absolute left-0 -top- bottom-0  pb-3   z-50  bg-white border-gray-300 px-2 rounded-t-lg transition-all duration-200  ${
              readTab ? '-mb-px border-b-white' : 'border-0'
            }`}>
            Read Books
          </button>
          <div
            onFocus={() => setWishlistTab(false)}
            onBlur={() => setWishlistTab(true)}
            onClick={getWishlist}
            className={`cursor-pointer border absolute left-28 bottom-0 transition-all duration-200 pb-3   z-50  bg-white border-gray-300 px-2 rounded-t-lg ${
              wishlistTab ? '-mb-px border-b-white' : 'border-0'
            }`}>
            Wishlist Books
          </div>
        </div>
        {/* Books */}
        {/* read books */}
        {activeButton === 'read' && (
          <div className="overflow-auto">
            {readBooks?.length > 0 ? (
              readBooks.map(w => (
                <div
                  key={w.bookId}
                  className="card md:card-side p-3 mb-3 border w-100 md:w-full md:mx-0 mx-auto md:h-[30vh] border-gray-200 overflow-auto">
                  <figure className="bg-gray-100 rounded-2xl">
                    <img className="p-6 h-[25vh]" src={w.image} alt="Books" />
                  </figure>
                  <div className="card-body md:space-y-1">
                    <h2 className="card-title">{w.bookName}</h2>

                    <div>
                      <p className="mb-3">By: {w.author || w.publisher}</p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-sm">Tags:</span>
                        {w.tags?.map((t, index) => (
                          <span
                            key={index}
                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 text-sm">
                      <p>Publisher: {w.publisher}</p>
                      <p>Pages: {w.totalPages}</p>
                    </div>

                    <div className="border-b border-gray-200 py-4"></div>

                    <div className="card-actions justify-start gap-3">
                      <span className="primary-bg px-4 cursor-pointer py-2 rounded-md text-sm">
                        Category: {w.category}
                      </span>
                      <span className="secondary-bg px-4 cursor-pointer py-2 rounded-md text-sm">
                        Rating: {w.rating}
                      </span>
                      <Link to={`/BookDetails/${w.bookId}`} className="secondary-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p className="text-xl">No read books yet!</p>
              </div>
            )}
          </div>
        )}
        {/* wishlist */}
        {activeButton === 'wishlist' && (
          <div className="overflow-auto">
            {wishlist?.length > 0 ? (
              wishlist.map(w => (
                <div
                  key={w.bookId}
                  className="card md:card-side p-3 mb-3 border w-100 md:w-full md:mx-0 mx-auto md:h-[30vh] border-gray-200 overflow-auto">
                  <figure className="bg-gray-100 rounded-2xl">
                    <img className="p-6 h-[25vh]" src={w.image} alt="Books" />
                  </figure>
                  <div className="card-body md:space-y-1">
                    <h2 className="card-title">{w.bookName}</h2>

                    <div>
                      <p className="mb-3">By: {w.author || w.publisher}</p>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-sm">Tags:</span>
                        {w.tags?.map((t, index) => (
                          <span
                            key={index}
                            className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 text-sm">
                      <p>Publisher: {w.publisher}</p>
                      <p>Pages: {w.totalPages}</p>
                    </div>

                    <div className="border-b border-gray-200 py-4"></div>

                    <div className="card-actions justify-start gap-3">
                      <span className="primary-bg px-4 cursor-pointer py-2 rounded-md text-sm">
                        Category: {w.category}
                      </span>
                      <span className="secondary-bg px-4 cursor-pointer py-2 rounded-md text-sm">
                        Rating: {w.rating}
                      </span>
                      <Link to={`/BookDetails/${w.bookId}`} className="secondary-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p className="text-xl">Your wishlist is empty!</p>
              </div>
            )}
          </div>
        )}
  
      </div>
    </>
  );
};
