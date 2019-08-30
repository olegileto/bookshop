export class BookStoreService {

    getBooks() {
        return [
            {
                id: 1,
                title: 'React up and running',
                author: 'Kally Bally',
                price: 32,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51hXcWkQIBL._SX379_BO1,204,203,200_.jpg'
            },
            {
                id: 2,
                title: 'Learn React Native',
                author: 'John Smith',
                price: 44,
                coverImage: 'https://covers.oreillystatic.com/images/0636920085270/lrg.jpg'
            },
            {
                id: 3,
                title: 'Learning React',
                author: 'Lucas Podolsky',
                price: 50,
                coverImage: 'https://covers.oreillystatic.com/images/0636920049579/lrg.jpg'
            }
        ];
    }
}