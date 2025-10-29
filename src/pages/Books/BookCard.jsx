import { Star } from "lucide-react";
import { Link } from "react-router";



export const BookCard = ({ book }) => {
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
    totalpages,
    yearOfPublishing,
  } = book;
  return (
    <Link
      to={`/BookDetails/${bookId}`}
      className="card relative md:h-[45vh]  mx-auto w-100 md:w-[40vw] lg:w-[16vw] shadow-sm">
      <figure className="bg-gray-100 relative">
        <img
          className="lg:w-[10vw] p-3 md:h-[25vh] object-cover relative  z-10"
          src={image}
          alt="Book"
        />{' '}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/20 blur-md -z-10"></div>
      </figure>
      <div className="card-body relative">
        <h2 className="card-title">
          {bookName}
          <div className="badge bg-[#016B61 ]">NEW</div>
        </h2>
        <p> By : {publisher}</p>
        <div className="card-actions justify-between items-end absolute bottom-0 space-x-8 border-t-1 border-dashed border-gray-300 py-4">
          <div className="badge badge-outline">
            {tags[0]} {tags[1]}
          </div>
          <div className="badge badge-outline">
            {rating} <Star size={15} />{' '}
          </div>
        </div>
      </div>
    </Link>
  );
};
