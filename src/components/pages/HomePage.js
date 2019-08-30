import React from 'react';

import BookList from "../BookList/BookList";

export const HomePage = () => {
    return (
        <div className='HomePage jumbotron'>
            <h1 className='display-3'>Books</h1>
            <BookList />
        </div>
    )
};
