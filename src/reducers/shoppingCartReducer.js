const updateCartItems = (cartItems, item, index) => {
    if (item.count === 0) {
        return [
            ...cartItems.slice(0, index),
            ...cartItems.slice(index + 1)
        ]
    }

    if (index === -1) {
        return [
            ...cartItems,
            item
        ]
    }

    return [
        ...cartItems.slice(0, index),
        item,
        ...cartItems.slice(index + 1)
    ]
};

const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        count = 0,
        name = book.title,
        total = 0
    } = item;

    return {
        id,
        name,
        count: count + quantity,
        total: total + quantity * book.price
    }
};

const updateOrder = (state, bookId, quantity, alertFlag) => {
    const {bookList: {books}, shoppingCart: {cartItems}} = state;

    const book = books.find((book) => book.id === bookId);
    const itemIndex = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);

    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex),
        alert: alertFlag
    };
};

const updateShoppingCart = (state, action) => {
    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0,
            alert: false
        }
    }

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1, true);

        case 'BOOK_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'ALL_BOOKS_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        case 'CLOSED_ALERT':
            return {
                ...state.shoppingCart, alert: action.payload
            };

        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;