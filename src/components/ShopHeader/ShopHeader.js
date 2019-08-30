import React from 'react';
import {Link} from "react-router-dom";

const ShopHeader = ({numItems, total}) => {
    return (
        <header className='shop-header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
                <Link to='/' className="navbar-brand" >BookShop</Link>


                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cart' className="nav-link">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/books' className="nav-link">Books</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/about' className="nav-link" >About</Link>
                        </li>
                    </ul>
                </div>
                <Link to='/cart' className='cart-title'>
                    <i className='cart-icon fa fa-shopping-cart'/>
                    {numItems} items (${total})
                </Link>
            </nav>
        </header>
    )
};

export default ShopHeader;