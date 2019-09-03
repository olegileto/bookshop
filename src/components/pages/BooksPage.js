import React from 'react';

import BookList from "../BookList/BookListContainer";

export const BooksPage = () => {
    return (
        <div className='BooksPage'>
            <h1 className='display-3'>Books</h1>
            <BookList />
            <table className="table table-hover table-style">
                <thead>
                <tr className='table-active'>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Count</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr className='table-secondary'>
                    <th scope="row">1</th>
                    <td>Learn JS</td>
                    <td>2</td>
                    <td>40$</td>
                    <td>
                        <button className='btn btn-outline-primary btn-style'>
                            PLUS
                        </button>
                        <button className='btn btn-outline-primary btn-style'>
                            MINUS
                        </button>
                        <button className='btn btn-outline-primary btn-style'>
                            DELETE
                        </button>

                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};
