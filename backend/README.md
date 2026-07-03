# Kennessy Ebooks Store - Backend API

## Setup

```bash
cd backend
npm install
cp .env.example .env
```

Update `.env` with your credentials.

## Running

```bash
npm run dev
```

## API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `POST /api/auth/refresh-token`

### Ebooks
- `GET /api/ebooks` - List ebooks
- `GET /api/ebooks/:id` - Get ebook
- `GET /api/ebooks/search` - Search
- `POST /api/ebooks` - Create (Auth required)
- `PUT /api/ebooks/:id` - Update (Auth required)
- `DELETE /api/ebooks/:id` - Delete (Auth required)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/:id` - Get order
- `PUT /api/orders/:id` - Update order
- `DELETE /api/orders/:id` - Cancel order

### Payments
- `POST /api/payments/stripe` - Stripe payment
- `POST /api/payments/flutterwave` - Flutterwave payment
- `POST /api/payments/paypal` - PayPal payment
- `POST /api/payments/mobile-money` - Mobile money payment
- `GET /api/payments/status/:transactionId` - Payment status

### Users
- `GET /api/users/profile` - Get profile (Auth required)
- `PUT /api/users/profile` - Update profile (Auth required)
- `POST /api/users/change-password` - Change password (Auth required)
- `GET /api/users/wishlist` - Get wishlist (Auth required)
- `POST /api/users/wishlist/:ebookId` - Add to wishlist (Auth required)
- `DELETE /api/users/wishlist/:ebookId` - Remove from wishlist (Auth required)
