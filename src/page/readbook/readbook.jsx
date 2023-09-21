import React, { useState } from 'react'
import { ReactReader } from 'react-reader'
import { useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';

const ReadBook = () => {

  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((book) => book.id === parseInt(id));
  const { Epub,title } = book.attributes;


  const [location, setLocation] = useState(null)
  const locationChanged = epubcifi => {

    setLocation(epubcifi)
  }
  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        title={title}
        showToc={false}
        location={location}
        locationChanged={locationChanged}
        url={Epub.data.attributes.url}
      />
    </div>
  )
}


export default ReadBook;