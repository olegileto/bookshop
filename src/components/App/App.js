import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import withBookStoreService from '../hoc/withBookStoreService';
import {HomePage} from "../pages/HomePage";
import {CartPage} from "../pages/CartPage";
import ShopHeader from "../ShopHeader/ShopHeader";
import {BooksPage} from "../pages/BooksPage";
import {AboutPage} from "../pages/AboutPage";

const App = () => {
    return (
        <div className='App'>
            <ShopHeader numItems={5} total={210}/>

            <main role='main' className='container body-style'>
                <Switch>
                    <Route path='/' component={HomePage} exact/>
                    <Route path='/cart' component={CartPage}/>
                    <Route path='/books' component={BooksPage}/>
                    <Route path='/about' component={AboutPage}/>
                </Switch>
            </main>
        </div>
    )
};

export default withBookStoreService()(App);
