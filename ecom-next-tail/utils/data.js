import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name: 'Pablo',
            email: 'pablo@pablo.com',
            password: bcrypt.hashSync('123123'),
            isAdming: true
        },
        {
            name: 'Juli',
            email: 'juli@juli.com',
            password: bcrypt.hashSync('123123'),
            isAdming: false
        }
    ],
    products : [
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
            description: 'A popular Shirt.',
            isFeatured: false
        },
        {
            name: 'Fit Shirt',
            slug: 'fit-shirt',
            category: 'Shirts',
            image: '/images/shirt2.jpg',
            price: 80,
            brand: 'Adidas',
            rating: 3.2,
            numReviews: 10,
            countInStock: 20,
            description: 'A popular Shirt.',
            isFeatured: false
        },
        {
            name: 'Golf Pants',
            slug: 'golf-pants',
            category: 'Pants',
            image: '/images/pants1.jpg',
            price: 90,
            brand: 'Oliver',
            rating: 2.9,
            numReviews: 13,
            countInStock: 20,
            description: 'Smart looking pants.',
            isFeatured: false
        },
        {
            name: 'Fit Pants',
            slug: 'fit-pants',
            category: 'Pants',
            image: '/images/pants2.jpg',
            price: 95,
            brand: 'Zara',
            rating: 3.5,
            numReviews: 7,
            countInStock: 20,
            description: 'Some pants from Zara Store.',
            isFeatured: false
        },
        {
            name: 'Fallen Jacket',
            slug: 'fallen-jacket',
            category: 'Jacket',
            image: '/images/campera1.jpg',
            price: 105,
            brand: 'Zara',
            rating: 4.6,
            numReviews: 9,
            countInStock: 20,
            description: 'Falling jacket ideal for casual events.',
            isFeatured: false
        },
        {
            name: 'Purple Set',
            slug: 'purple-set',
            category: 'Set',
            image: '/images/conjunto2.jpg',
            price: 150,
            brand: 'Awada',
            rating: 4.1,
            numReviews: 2,
            countInStock: 20,
            description: 'Beautiful set for the fall.',
            isFeatured: false
        },
        {
            name: 'Sky Dress',
            slug: 'sky-dress',
            category: 'Dress',
            image: '/images/vestido3.jpg',
            price: 80,
            brand: 'Awada',
            rating: 3.9,
            numReviews: 21,
            countInStock: 20,
            description: 'Beautiful linen dress ideal for hot days.',
            isFeatured: false
        },
        {
            name: 'Spring Blazer',
            slug: '-spring-blazer',
            category: 'Blazer',
            image: '/images/blazer4.jpg',
            price: 110,
            brand: 'Awada',
            rating: 4.5,
            numReviews: 1,
            countInStock: 20,
            description: 'Elegant blazer with inside pockets.',
            isFeatured: false
        },
        {
            name: 'Autumn top',
            slug: 'autumn-top',
            category: 'Top',
            image: '/images/top5.jpg',
            price: 78,
            brand: 'Jorp',
            rating: 3,
            numReviews: 11,
            countInStock: 20,
            description: 'Cool and loose top.',
            isFeatured: false
        },
        {
            name: 'Crazy T-Shirt',
            slug: 'crazy-shirt',
            category: 'Shirts',
            image: '/images/remera6.png',
            price: 60,
            brand: 'Lacoste',
            rating: 3.8,
            numReviews: 18,
            countInStock: 20,
            description: 'Crazy T-shirt for every day. ',
            isFeatured: false
        },
        {
            name: 'Grape Shirt',
            slug: 'grape-shirt',
            category: 'Shirts',
            image: '/images/remera7.png',
            price: 60,
            brand: 'Lacoste',
            rating: 3.1,
            numReviews: 34,
            countInStock: 20,
            description: 'Purple t-shirt ideal to go out for a glass of wine.',
            isFeatured: false
        },
        {
            name: 'Autumn Jacket',
            slug: 'autumn-jacket',
            category: 'Jackets',
            image: '/images/campera8.png',
            price: 180,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 11,
            countInStock: 20,
            description: 'Leather Jacket with internal and external pockets.',
            isFeatured: false
        },
        {
            name: 'Crazy Jersey',
            slug: 'crazy-jersey',
            category: 'Jersey',
            image: '/images/buzo9.png',
            price: 88,
            brand: 'Lacoste',
            rating: 3.5,
            numReviews: 3,
            countInStock: 20,
            description: 'Blue Jersey.',
            isFeatured: false
        },
        {
            name: 'White Tennis Polo',
            slug: 'tennis-shirt',
            category: 'Shirts',
            image: '/images/polo10.png',
            price: 79,
            brand: 'Lacoste',
            rating: 3.9,
            numReviews: 45,
            countInStock: 20,
            description: 'Tennis Polo.',
            isFeatured: false
        },
        {
            name: 'Remeron',
            slug: 'remerita',
            category: 'Shirts',
            image: '/images/carousel1.png',
            price: 250,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular Shirt',
            isFeatured: true
        },
        {
            name: 'Remeron',
            slug: 'remerita2',
            category: 'Shirts',
            image: '/images/carousel2.png',
            price: 250,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular Shirt',
            isFeatured: true
        },
        {
            name: 'Remeron',
            slug: 'remerita3',
            category: 'Shirts',
            image: '/images/carousel3.png',
            price: 250,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 8,
            countInStock: 20,
            description: 'A popular Shirt',
            isFeatured: true
        }
    ],
}

export default data;