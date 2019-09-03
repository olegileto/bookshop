import updateShoppingCart from "./shoppingCartReducer";
import updateBookList from "./bookListReducer";

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
};

export default reducer;

