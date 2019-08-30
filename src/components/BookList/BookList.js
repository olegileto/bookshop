import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";

import BookListItem from "../BookListItem/BookListItem";
import withBookStoreService from '../hoc/withBookStoreService';
import {booksLoaded} from "../../actions";
import compose from "../../utils/compose";

class BookList extends Component {

    componentDidMount() {
        // 1. receive data
        const {bookStoreService} = this.props;
        const data = bookStoreService.getBooks();

        // 2. dispatch action to store
        this.props.booksLoaded(data);
    }

    render() {
        const {books} = this.props;

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

const mapStateToProps = ({books}) => {
    return {books}
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        booksLoaded
    }, dispatch)
};

export default compose(withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookList);
