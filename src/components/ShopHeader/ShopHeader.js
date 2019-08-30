import React from 'react';

const ShopHeader = ({numItems, total}) => {
    return (
        <header className='shop-header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">BookShop</a>


                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Books</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
                <a>
                    <i className='cart-icon fa fa-shopping-cart'/>
                    {numItems} items (${total})
                </a>
            </nav>
        </header>
    )
};

export default ShopHeader;