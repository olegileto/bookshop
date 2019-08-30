import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";

import BookListItem from "../BookListItem/BookListItem";
import withBookStoreService from '../hoc/withBookStoreService';
import {booksLoaded, booksRequested} from "../../actions";
import compose from "../../utils/compose";
import Spinner from "../Spinner/Spinner";

class BookList extends Component {

    componentDidMount() {

        const {bookStoreService, booksLoaded, booksRequested} = this.props;
        booksRequested();
        bookStoreService.getBooks()
            .then((data) => booksLoaded(data));
    }

    render() {
        const {books, loading} = this.props;

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

const mapStateToProps = ({books, loading}) => {
    return {books, loading}
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksLoaded,
        booksRequested
    }, dispatch)
};

export default compose(withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookList);
