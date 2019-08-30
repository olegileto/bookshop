import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import withBookStoreService from '../hoc/withBookStoreService';
import {HomePage} from "../pages/HomePage";
import {CartPage} from "../pages/CartPage";

const App = ({bookStoreService}) => {
    return (
        <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/cart' component={CartPage}/>
        </Switch>
    )
};
export default withBookStoreService()(App);
