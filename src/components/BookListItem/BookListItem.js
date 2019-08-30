import React from 'react';

const BookListItem = ({book}) => {

    const {title, author, price, coverImage} = book;

    return (
        <div className='books-list-item'>
            <div className='book-cover'>
                <img src={coverImage} alt='Cover'/>
            </div>
            <div className='book-details'>
                <a href='#' className='book-title'>{title}</a>
                <div className='book-author'>{author}</div>
                <div className='book-price'>{price}$</div>
                <button className='btn btn-primary add-to-cart'>Add to cart</button>
            </div>
        </div>
    )
};

export default BookListItem;