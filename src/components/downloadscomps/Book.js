import React from 'react';

const Book = ({img,title}) =>{
  return(
    <div className="inf_book_container w-auto m-4">
      <img src={img} alt />
      <p  className="font-bold w-auto text-center">{title}</p>
    </div>
  )
}

export default Book;