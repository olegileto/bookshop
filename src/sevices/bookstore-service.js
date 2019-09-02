export class BookStoreService {
    data =  [
        {
            id: 1,
            title: 'Story of my life',
            author: 'Kally Bally',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41i857Y5ZuL._SX322_BO1,204,203,200_.jpg'
        },
        {
            id: 2,
            title: 'I thought about you today',
            author: 'John Smith',
            price: 44,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/31M-TWcqfUL._SX322_BO1,204,203,200_.jpg'
        },
        {
            id: 3,
            title: 'Black book of poems',
            author: 'Lucas Podolsky',
            price: 50,
            coverImage: 'https://i.pinimg.com/originals/45/28/7d/45287d1978f62152ffd78a1b268411eb.jpg'
        }
    ];

    getBooks() {
        return new Promise(((resolve) => {
            setTimeout(() => {
                resolve(this.data);
            }, 700)
        }))
    }
}