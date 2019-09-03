import React from 'react';
import {connect} from "react-redux";

import {bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart} from "../../actions";

const ShoppingCartTable = ({items, total, onIncrease, onDegrease, onDelete}) => {

    const renderRow = (item, index) => {
        const {id, name, count, total} = item;
        return (
            <tr className='table-secondary' key={id}>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{count}</td>
                <td>{total}$</td>
                <td>

                    <button
                        onClick={() => onIncrease(id)}
                        className='btn btn-outline-primary btn-style'>
                        PLUS
                    </button>
                    <button
                        onClick={() => onDegrease(id)}
                        className='btn btn-outline-primary btn-style'>
                        MINUS
                    </button>
                    <button
                        onClick={() => onDelete(id)}
                        className='btn btn-outline-primary btn-style'>
                        DELETE
                    </button>
                </td>
            </tr>
        )
    };

    return (
        <div className='ShoppingCartTable'>
            <div className='header'>
                <h2>Your Orders</h2>
                <span>Total: {total}$</span>
            </div>

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
                {
                    items.map(renderRow)
                }
                </tbody>
            </table>

        </div>
    );
};

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDegrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);