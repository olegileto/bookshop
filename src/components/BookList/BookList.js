import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";

import BookListItem from "../BookListItem/BookListItem";
import withBookStoreService from '../hoc/withBookStoreService';
import {booksLoaded, booksRequested, booksError} from "../../actions";
import compose from "../../utils/compose";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

class BookList extends Component {

    componentDidMount() {

        const {
            bookStoreService,
            booksLoaded,
            booksRequested,
            booksError
        } = this.props;
        booksRequested();
        bookStoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((err) => booksError(err));
    }

    render() {
        const {books, loading, error} = this.props;

        if (error) {
            return <ErrorIndicator/>
        }

        if (loading) {
            return <Spinner/>
        }

        return (
            <ul className='list-group books-list'>
                {
                    books.map((book) => {
                        return (
                            <li
                                key={book.id}
                                className='list-group-item d-flex justify-content-between align-items-center'>
                                <BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {books, loading, error}
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksLoaded,
        booksRequested,
        booksError
    }, dispatch)
};

export default compose(withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookList);
