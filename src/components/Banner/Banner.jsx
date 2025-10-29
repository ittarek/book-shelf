import React from 'react';
import mainBook from '../../assets/mainBook.png';
// import milkhoney from '../../assets/milkhoney.jpg';
export const Banner = () => {
  return (
    <>
      <section className="flex justify-between items-center bg-gray-50 md:p-24 p-4 z-10">
        {/* left side items */}
        <div className="left-side w-[35vw]">
          <h1
            className="text-2xl md:text-7xl leading-[50px] md:leading-[90px] pb-11 z-1 "
            style={{ fontFamily: 'Times New Roman , Times, serif ' }}>
            Books to freshen up your bookshelf
          </h1>
          <button className="primary-btn">View The list</button>
        </div>
        {/* right side items  for banner  image */}

        <div className="right-side w-[30vw]">
          <img src={mainBook} alt="" />
        </div>
      </section>
    </>
  );
};
