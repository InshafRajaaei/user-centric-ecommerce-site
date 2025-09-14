🛍️ RYNZA - Modern E-Commerce Platform
https://img.shields.io/badge/React-18.2-blue
https://img.shields.io/badge/Node.js-18.0-green
https://img.shields.io/badge/MongoDB-6.0-green
https://img.shields.io/badge/TailwindCSS-3.3-cyan

RYNZA is a full-stack e-commerce platform built with the MERN stack, featuring a modern responsive design, secure payment processing, and a comprehensive admin dashboard for complete store management.

https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=RYNZA+E-Commerce+Platform

✨ Features
🛒 Customer Features
Modern UI/UX - Responsive design with Tailwind CSS
Product Catalog - Advanced filtering and search functionality
Shopping Cart - Persistent cart with local storage sync
User Authentication - JWT-based secure login/register
Payment Integration - Stripe and Razorpay support
Order Management - Complete order history and tracking
Product Reviews - Rating and review system

⚙️ Admin Features
Dashboard - Comprehensive admin panel
Product Management - Add, edit, delete products with multiple images
Order Management - Process and update order status
Inventory Management - Stock level monitoring
User Management - Customer account oversight
Image Management - Cloudinary integration for media storage

🚀 Technical Features
MERN Stack - MongoDB, Express.js, React, Node.js
RESTful API - Clean and well-structured API architecture
JWT Authentication - Secure user authentication
Cloud Storage - Cloudinary integration for images
Payment Gateways - Stripe and Razorpay integration
Responsive Design - Mobile-first approach

📦 Installation
Prerequisites
Node.js (v18 or higher)
MongoDB (v6 or higher)
npm or yarn

Backend Setup

# Clone the repository
git clone https://github.com/yourusername/ryzna-ecommerce.git
cd rynza-ecommerce/backend

# Install dependencies
npm install

# Environment configuration
cp .env.example .env
# Edit .env with your configuration

# Start the development server
npm run server

Admin Panel Setup

cd ../admin-panel

# Install dependencies
npm install

# Environment configuration
cp .env.example .env

# Start the development server
npm run dev

🔧 Environment Variables
Backend (.env)

MONGODB_URL=your_mongodb_connection_string
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
CLOUDINARY_NAME=your_cloudinary_name
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=admin_password
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
PORT=4000

Frontend (.env)
VITE_BACKEND_URL=http://localhost:XXXX

🏗️ Project Structure
ryzna-ecommerce/
├── backend/
│   ├── config/          # Database and service configurations
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── server.js        # Express server setup
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── context/     # React context providers
│   │   ├── pages/       # Page components
│   │   ├── assets/      # Images and static files
│   │   └── App.jsx      # Main App component
│   └── package.json
├── admin-panel/
│   └── src/
│       ├── components/  # Admin components
│       ├── pages/       # Admin pages
│       └── App.jsx      # Admin App component
└── README.md

📱 Usage
For Customers
Browse products with advanced filters
Add items to cart with size selection
Create account or login
Proceed to secure checkout
Complete payment with Stripe/Razorpay
Track orders in user dashboard

For Administrators
Access admin panel at /admin
Manage products with image uploads
Process customer orders
Update inventory levels
Monitor sales and user activity

🛠️ Built With
Frontend: React, React Router, Context API, Axios, Tailwind CSS
Backend: Node.js, Express.js, MongoDB, Mongoose
Authentication: JWT, bcryptjs
Payment: Stripe, Razorpay
Storage: Cloudinary, Multer
Deployment: Vercel, Heroku, MongoDB Atlas

🙏 Acknowledgments
Inspired by modern e-commerce platforms
UI components designed with Tailwind CSS
Icons from various open source libraries
Community support and contributions

⭐ Star this repo if you found it helpful!
