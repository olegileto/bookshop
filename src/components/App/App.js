import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import withBookStoreService from '../hoc/withBookStoreService';
import {HomePage} from "../pages/HomePage";
import {CartPage} from "../pages/CartPage";
import ShopHeader from "../ShopHeader/ShopHeader";

const App = ({bookStoreService}) => {
    return (
        <main role='main' className='container'>
            <ShopHeader numItems={5} total={210}/>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/cart' component={CartPage}/>
            </Switch>
        </main>
    )
};
export default withBookStoreService()(App);
