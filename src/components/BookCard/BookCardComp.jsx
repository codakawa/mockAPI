import React from 'react'
import starRed from "../../images/star-red.svg"
import { Link } from 'react-router-dom'

const BookCardComp = ({bookInfo}) => {
  return (
    <Link to={`/book/${bookInfo.id}`}>
        <div className='bookCard'>
            <div className="bookImage">
                <img src={bookInfo.image} alt="" />
            </div>
            <h3>{bookInfo.name}</h3>
            <span>{bookInfo.author}</span>
            <div className="raiting">
                <img src={starRed} alt="" />
                <span>{bookInfo.raiting}</span>
            </div>
        </div>
    </Link>
  )
}

export default BookCardComp