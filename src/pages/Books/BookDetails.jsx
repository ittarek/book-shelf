import { useState } from 'react';
import { useLoaderData } from 'react-router';

export const BookDetails = () => {
    const data = useLoaderData();
    const [readBlock, setReadBlock] = useState(false)
    const [isWishlist, setIsWishlist] = useState(false)
  if (!data) return <p>Book not found.</p>;

  const {
    author,
    bookId,
    bookName,
    category,
    image,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing,
  } = data || {};

  // add read books
  const AddToReadBooks = data => {
    console.log('click', data.bookId);
    // get books from local storage
    const readBooks = JSON.parse(localStorage.getItem('readBooks')) || [];
    // checking books
    const exist = readBooks.some(book => book.bookId === bookId);
    if (!exist) {
      readBooks.push(data);
      localStorage.setItem('readBooks', JSON.stringify(readBooks));
      alert('The books is read finished');
    } else {
        alert('The books is read already finished');
        setReadBlock(true)
    }
  };

  // wishlist action
  const addWishlist = book => {
    //   get wishlist
    const wishlist = JSON.parse(localStorage.getItem('wishlistBooks')) || [];
    //   check wishlist
    const exist = wishlist.some(item => item.bookId === book.bookId);
    if (!exist) {
      wishlist.push(book);
      localStorage.setItem('wishlistBooks', JSON.stringify(wishlist));
      alert('Book Added to wishlist');
    } else {
        setIsWishlist(true)
      alert('Book already wishlist');
    }
  };
  return (
    <div className="hero bg-base-50 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="bg-gray-200 rounded-2xl relative">
          <img src={image} className="max-w-sm p-9   skew-x-3 relative z-10" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/20 blur-md -z-10"></div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <h1 className="text-gray-600 mt-3">By : {publisher}</h1>
          <h1 className="text-gray-600 font-bold">{category}</h1>
          <p className="py-6">{review}</p>
          <small className="font-semibold ">
            Tag {tags[0]} {tags[1]}
          </small>
          <br />
          <ul className="mt-3 [&>li]:text-gray-500 [&>li>span]:font-semibold [&>li>span]:ml-[100] [&>li]:flex [&>li]:justify-between [&>li]:items-center space-y-2 [&>li>span]:text-left w-[20vw]">
            <li>
              Number of Pages <span>{totalPages}</span>
            </li>
            <li>
              Publisher <span>{publisher}</span>
            </li>
            <li>
              Year of Publishing <span>{yearOfPublishing}</span>
            </li>
            <li>
              Rating <span>{rating}</span>
            </li>
          </ul>
          <div className=" text-black  space-x-6 mt-3">
            <button
              onClick={() => AddToReadBooks(data)}
              disabled={readBlock}
              className={`primary-btn ${
                readBlock ? 'bg-gray-400 cursor-not-allowed' : ''
              }`}>
              Read{' '}
            </button>
            <button
              disabled={isWishlist}
              onClick={() => addWishlist(data)}
              className={`secondary-btn ${isWishlist ? "bg-gray-400 cursor-not-allowed" : ""}`}>
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
