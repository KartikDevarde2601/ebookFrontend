import React from 'react'
import style from './herosection.module.css'
import HeroBook from '../herobook/herobook'
import { useSelector } from 'react-redux/es/hooks/useSelector'



const HeroSection= ()=> {
  const isSearch = useSelector((state) => state.books.isSearch);

  const books = useSelector((state) => state.books.books);
  const DisplayBook = books.slice(0,2);

  if (isSearch) {
    return null;
  }


  
  return (
    <div className={style.container}>
    {
      DisplayBook.map((book) => (
        <HeroBook key={book.id} book={book}/>
      ))
    }
    </div>
  )
}

export default HeroSection;
