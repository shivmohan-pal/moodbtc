import { useEffect } from 'react'
import '../Css/books.css'
import ReadingBooks from './BooksData.jsx'
function Shelf(prop) {
  return (
    <div className="bookRow">
      {prop.bookList.map((element, index) => {
        return (
          <div className="bookCol" key={index}>
            <h2 className='bookTitle'>{element.title}</h2>
            <p className='bookAuthor'>{element.author}</p>
            <a href={element.downloadLink} download>Download for free &#x2192;</a>
          </div>
        )
      })
      }

    </div>
  )
}
function Books() {
  useEffect(()=>{
    document.title=`moodBTC - Books`;
  })
  return (
    <div className="content-window">
      <div className="content-window-child" style={{ background: ' var(--light-gray) ' }}>
        <div className="books">
          <div>
            <h1 className='heading'>Trading Books</h1>
            <p className='motoLine'>These books are enough to become a trading master you just need <strong>practice</strong> reading these books </p>
            <Shelf bookList={ReadingBooks[0].TradingBooks} />
          </div>
          <div>
            <h1 className='heading'>Non- Trading Books</h1>
            <p className='motoLine'>These books will evolve your thinking and your knowledge</p>
            <Shelf bookList={ReadingBooks[1].NontradingBooks} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Books;