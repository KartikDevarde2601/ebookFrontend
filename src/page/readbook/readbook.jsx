import React, { useState,useEffect } from 'react'
import { ReactReader } from 'react-reader'
import { useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';

const ReadBook = () => {

  const { id } = useParams();
  const books = useSelector((state) => state.books.books);
  const book = books.find((book) => book.id === parseInt(id));
  const { Epub,title } = book.attributes;


  const [location, setLocation] = useState(null)
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    // Detect screen width to determine if it's a smartphone
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint as needed
    };
    
    // Initial check
    handleResize();

    // Add a listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const locationChanged = epubcifi => {
    setLocation(epubcifi)

  }
  return (
    <div style={{ height: '100vh' }}>
      <ReactReader
        title={title}
        showToc={true}
        location={location}
        locationChanged={locationChanged}
        url={Epub.data.attributes.url}
        swipeable={isMobile}
      />
    </div>
  )
}


export default ReadBook;