import React, { useEffect, useState } from 'react'
import fetchData from '../../components/API'
import BookCardComp from '../../components/BookCard/BookCardComp'

const Libriary = () => {
    const [booksList, setBooksList] = useState(null)
    useEffect(() => {
        fetchData("https://645ba01fa8f9e4d6e76e0dda.mockapi.io/books/1/books/")
        .then(resp => setBooksList(resp))
        .finally(console.log(booksList))
    }, [  ])
    if(booksList === null) return <p>LOADING</p>
    return (
        <div className='libriary'>
            <div className="bestBooks">
                <h2>Лучшие произведения</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Viverra nunc vulputate vestibulum vitae eget tellus bibendum commodo sed. Cursus mauris bibendum nulla porta volutpat.</p>
                <div className="bookCards">
                    {booksList.map(book => <BookCardComp bookInfo={book} key={book.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default Libriary