import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../../components/API'

const BookDetail = () => {
    const { id } = useParams()
    const [bookInfo, setBookInfo] = useState(null)

    useEffect(() => {
        console.log(id, "id");
        fetchData(`https://645ba01fa8f9e4d6e76e0dda.mockapi.io/books/1/books/${id}/book_detail/${id}`)
        .then(resp => setBookInfo(resp))
        .finally(console.log(bookInfo), "resp")
    }, [ id ])

    if(bookInfo === null) return <p>LOADING</p>
    return (
        <div className='bookDetail'>
            <img src={bookInfo.parent.image} alt="" />
            <div className="bookDetailText">
                <span>Автор: {bookInfo.parent.author}</span>
                <h2>Книга: {bookInfo.parent.name}</h2>
                <p>Описание: {bookInfo.discription}</p>
                <span>Просмотры: {bookInfo.views}</span>
            </div>
        </div>
    )
}

export default BookDetail