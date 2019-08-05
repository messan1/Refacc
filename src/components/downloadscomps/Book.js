import React from 'react';

const Book = ({img,title,link}) =>{
  return(
    <a className="inf_book_container m-4" rel="noopener noreferrer" target="_blank" href={link}>
      <img src={img} alt="Document PDF" className="self-strech m-auto" />
      <p  className="font-bold w-auto text-center">{title}</p>
    </a>
  )
}

export default Book;