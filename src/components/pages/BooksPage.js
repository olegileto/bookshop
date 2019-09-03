import React from 'react';

import BookList from "../BookList/BookListContainer";
import ShoppingCartTable from "../ShoppingCartTable/ShoppingCartTable";

export const BooksPage = () => {
    return (
        <div className='BooksPage'>
            <h1 className='display-3'>Books</h1>
            <BookList />
            <ShoppingCartTable/>
        </div>
    )
};
