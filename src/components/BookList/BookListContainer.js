import React, {Component} from 'react'
import {connect} from 'react-redux'

import withBookStoreService from '../hoc/withBookStoreService';
import {fetchBooks, bookAddedToCart, closedAlert} from "../../actions";
import compose from "../../utils/compose";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import BookList from "./BookList";
import SuccessAlert from "../alerts/SuccessAlert";

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    componentDidUpdate(prevProps) {
        const {closedAlertMessage, alert} = this.props;

        if (alert !== prevProps.alert && alert !== false) {
            setTimeout(() => {closedAlertMessage(!alert)}, 2000);
        }
    }

    render() {
        const {books, loading, error, onAddedToCart, alert} = this.props;

        if (error) {
            return <ErrorIndicator/>
        }

        if (loading) {
            return <Spinner/>
        }

        return (
            <div className='book-list'>
                <BookList
                    books={books}
                    onAddedToCart={onAddedToCart}/>
                {alert ? <SuccessAlert/> : null}
            </div>
        )

    }
}


const mapStateToProps = ({bookList: {books, loading, error}, shoppingCart: {alert}}) => {
    return {books, loading, error, alert}
};

const mapDispatchToProps = (dispatch, {bookStoreService}) => {
    return {
        fetchBooks: fetchBooks(bookStoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
        closedAlertMessage: (alert) => dispatch(closedAlert(alert))
    }
};

export default compose(withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps))(BookListContainer);
