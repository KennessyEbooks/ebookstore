// Kennessy Ebooks Store Configuration

const STORE_CONFIG = {
    storeName: 'Kennessy Ebooks Store',
    version: '1.0.0',
    currency: 'NGN', // Default currency (Nigeria Naira)
    supportedCountries: {
        NG: { name: 'Nigeria', currency: 'NGN', symbol: '₦', taxRate: 0.075 },
        KE: { name: 'Kenya', currency: 'KES', symbol: 'Ksh', taxRate: 0.16 },
        GH: { name: 'Ghana', currency: 'GHS', symbol: '₵', taxRate: 0.125 },
        UG: { name: 'Uganda', currency: 'UGX', symbol: 'USh', taxRate: 0.18 },
        ZA: { name: 'South Africa', currency: 'ZAR', symbol: 'R', taxRate: 0.15 },
        TZ: { name: 'Tanzania', currency: 'TZS', symbol: 'TSh', taxRate: 0.18 },
        CM: { name: 'Cameroon', currency: 'XAF', symbol: 'Fr', taxRate: 0.19 },
        CI: { name: 'Ivory Coast', currency: 'XOF', symbol: 'Fr CFA', taxRate: 0.18 }
    },
    paymentGateways: {
        card: {
            name: 'Credit/Debit Card',
            providers: ['Stripe', 'Flutterwave'],
            active: true
        },
        mobileMoney: {
            name: 'Mobile Money',
            providers: ['MTN Mobile Money', 'Airtel Money', 'Safaricom M-Pesa', 'Telecel'],
            active: true
        },
        bankTransfer: {
            name: 'Bank Transfer',
            providers: ['Local Bank Transfer'],
            active: true
        },
        paypal: {
            name: 'PayPal',
            providers: ['PayPal'],
            active: true
        }
    },
    // Ebook Data
    ebooks: [
        {
            id: 1,
            title: 'Modern Organic Farming Techniques',
            author: 'Dr. James Okonkwo',
            category: 'farming',
            price: 2500,
            baseCurrency: 'NGN',
            description: 'Learn sustainable and profitable organic farming methods suitable for African climate.',
            cover: '🌾',
            rating: 4.8,
            reviews: 245,
            pages: 320
        },
        {
            id: 2,
            title: 'Climate-Smart Agriculture for Africa',
            author: 'Dr. Amara Mensah',
            category: 'farming',
            price: 3500,
            baseCurrency: 'NGN',
            description: 'Comprehensive guide on adapting farming practices to climate change.',
            cover: '🌱',
            rating: 4.6,
            reviews: 189,
            pages: 280
        },
        {
            id: 3,
            title: 'Soil Management and Crop Yield Improvement',
            author: 'Prof. Kofi Asante',
            category: 'farming',
            price: 2800,
            baseCurrency: 'NGN',
            description: 'Practical guide to soil testing, improvement, and maximizing crop yields.',
            cover: '🌾',
            rating: 4.7,
            reviews: 156,
            pages: 350
        },
        {
            id: 4,
            title: 'Introduction to Python Programming',
            author: 'Mr. Samuel Kariuki',
            category: 'education',
            price: 1500,
            baseCurrency: 'NGN',
            description: 'Beginner-friendly guide to learning Python from scratch.',
            cover: '💻',
            rating: 4.9,
            reviews: 512,
            pages: 400
        },
        {
            id: 5,
            title: 'Digital Marketing for African Businesses',
            author: 'Ms. Nneka Okafor',
            category: 'business',
            price: 2200,
            baseCurrency: 'NGN',
            description: 'Master digital marketing strategies tailored for African markets.',
            cover: '📱',
            rating: 4.5,
            reviews: 178,
            pages: 290
        },
        {
            id: 6,
            title: 'Entrepreneurship: From Idea to Success',
            author: 'Mr. Kwame Boateng',
            category: 'business',
            price: 3000,
            baseCurrency: 'NGN',
            description: 'Complete guide to starting and growing a successful business.',
            cover: '📈',
            rating: 4.7,
            reviews: 223,
            pages: 320
        },
        {
            id: 7,
            title: 'Nutrition and Health for Better Living',
            author: 'Dr. Fatima Hassan',
            category: 'health',
            price: 1800,
            baseCurrency: 'NGN',
            description: 'Essential guide to nutrition, wellness, and disease prevention.',
            cover: '🏥',
            rating: 4.6,
            reviews: 267,
            pages: 280
        },
        {
            id: 8,
            title: 'Vegetable Farming for Profit',
            author: 'Mr. Patrick Mwangi',
            category: 'farming',
            price: 2000,
            baseCurrency: 'NGN',
            description: 'Step-by-step guide to profitable vegetable farming in Africa.',
            cover: '🥬',
            rating: 4.8,
            reviews: 134,
            pages: 250
        },
        {
            id: 9,
            title: 'Web Development Masterclass',
            author: 'Dr. David Owusu',
            category: 'education',
            price: 4500,
            baseCurrency: 'NGN',
            description: 'Complete course covering HTML, CSS, JavaScript, and modern frameworks.',
            cover: '🌐',
            rating: 4.9,
            reviews: 456,
            pages: 600
        },
        {
            id: 10,
            title: 'Livestock Management Guide',
            author: 'Dr. Isaac Kiplagat',
            category: 'farming',
            price: 2600,
            baseCurrency: 'NGN',
            description: 'Complete guide to raising cattle, poultry, and goats in Africa.',
            cover: '🐄',
            rating: 4.7,
            reviews: 145,
            pages: 310
        },
        {
            id: 11,
            title: 'Financial Literacy for Africans',
            author: 'Mr. Chisom Eze',
            category: 'business',
            price: 1900,
            baseCurrency: 'NGN',
            description: 'Learn money management, investing, and financial planning.',
            cover: '💰',
            rating: 4.6,
            reviews: 198,
            pages: 270
        },
        {
            id: 12,
            title: 'Mental Health and Wellness',
            author: 'Dr. Grace Omondi',
            category: 'health',
            price: 1600,
            baseCurrency: 'NGN',
            description: 'Guide to mental health awareness and wellness strategies.',
            cover: '🧠',
            rating: 4.8,
            reviews: 289,
            pages: 230
        }
    ]
};

// Exchange rates (relative to NGN)
const EXCHANGE_RATES = {
    NGN: 1,
    KES: 0.0075,
    GHS: 0.015,
    UGX: 0.00026,
    ZAR: 0.0165,
    TZS: 0.000155,
    XAF: 0.0026,
    XOF: 0.0026
};

// API Endpoints (for backend integration)
const API_ENDPOINTS = {
    baseURL: 'https://api.kennessyebooks.com',
    checkout: '/api/checkout',
    payment: '/api/payment',
    orders: '/api/orders',
    users: '/api/users',
    ebooks: '/api/ebooks'
};

// Payment Provider Keys (to be stored securely in backend)
const PAYMENT_KEYS = {
    stripe: process.env.STRIPE_PUBLIC_KEY || 'pk_test_XXXXXXXXX',
    flutterwave: process.env.FLUTTERWAVE_PUBLIC_KEY || 'FLWR_PUB_XXXXXXXXX',
    paypal: process.env.PAYPAL_CLIENT_ID || 'XXXXXXXXX'
};