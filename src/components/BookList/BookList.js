import BookListItem from "../BookListItem/BookListItem";
import React from "react";

const BookList = ({books, onAddedToCart}) => {
    return (
        <ul className='list-group books-list'>
            {
                books.map((book) => {
                    return (
                        <li
                            key={book.id}
                            className='list-group-item d-flex justify-content-between align-items-center'>
                            <BookListItem
                                book={book}
                                onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default BookList;