import React from 'react';
import {Link} from "react-router-dom";

const BookListItem = ({book, onAddedToCart}) => {

    const {title, author, price, coverImage} = book;

    return (
        <div className='books-list-item'>
            <div className='book-cover'>
                <img src={coverImage} alt='Cover'/>
            </div>
            <div className='book-details'>
                <Link to='#' className='book-title'>{title}</Link>
                <div className='book-author'>{author}</div>
                <div className='book-price'>{price}$</div>
                <button
                    onClick={onAddedToCart}
                    className='btn btn-primary add-to-cart'>Add to cart</button>
            </div>
        </div>
    )
};

export default BookListItem;