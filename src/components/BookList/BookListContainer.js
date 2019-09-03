import React, {Component} from 'react'
import {connect} from 'react-redux'

import withBookStoreService from '../hoc/withBookStoreService';
import {fetchBooks, bookAddedToCart} from "../../actions";
import compose from "../../utils/compose";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import BookList from "./BookList";

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;

        if (error) {
            return <ErrorIndicator/>
        }

        if (loading) {
            return <Spinner/>
        }

        return <BookList
            books={books}
            onAddedToCart={onAddedToCart}/>

    }
}


const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
};

const mapDispatchToProps = (dispatch, {bookStoreService}) => {
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }
};

export default compose(withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookListContainer);
