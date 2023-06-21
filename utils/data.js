import bcrypt from 'bcryptjs';

const data = {
    users: [
{
    name: 'John',
    email: 'admin@example.com',
    password:  bcrypt.hashSync('123456'),
    isAdmin: true,
},
{
    name: 'Jane',
    email: 'dede@example.com',
    password:  bcrypt.hashSync('123456'),
    isAdmin: false,
},
  
    ],
    products: [
        {
            name: 'Free Shirt',
            slug: 'free-shirt',
            category: 'Shirts',
            image: '/images/shirt1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Slim Shirt',
            slug: 'slim-shirt',
            category: 'Shirts',
            image: '/images/shirt3.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Fit pant',
            slug: 'fit-pant',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Smart pant',
            slug: 'smart-pant',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt'
        },
        {
            name: 'Classic Shirt',
            slug: 'classic-pant',
            category: 'Pants',
            image: '/images/pants3.jpg',
            price: 70,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular shirt'
        },
    ]
}

export default data;