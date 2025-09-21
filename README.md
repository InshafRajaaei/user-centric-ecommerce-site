# 🛍️ RYNZA - Modern E-Commerce Platform

[![React](https://img.shields.io/badge/React-18.2-blue)]()  
[![Node.js](https://img.shields.io/badge/Node.js-18.0-green)]()  
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green)]()  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-cyan)]()  

---

![RYNZA Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=RYNZA+E-Commerce+Platform)
**RYNZA** is a **full-stack e-commerce platform** built with the **MERN stack**, featuring:  
✅ Modern responsive UI  
✅ Secure payment processing (Stripe & Razorpay)  
✅ Comprehensive **Admin Dashboard** for store management  

---
## ✨ Features

### 🛒 Customer Features
- **Modern UI/UX** – Responsive design with Tailwind CSS  
- **Product Catalog** – Advanced filtering & search  
- **Shopping Cart** – Persistent cart with local storage sync  
- **User Authentication** – JWT-based secure login/register  
- **Payment Integration** – Stripe & Razorpay support  
- **Order Management** – Order history & tracking  
- **Product Reviews** – Rating & review system  

### ⚙️ Admin Features
- **Dashboard** – Complete admin panel  
- **Product Management** – Add, edit, delete products with multiple images  
- **Order Management** – Process and update order status  
- **Inventory Management** – Stock level monitoring  
- **User Management** – Customer account oversight  
- **Image Management** – Cloudinary integration  

### 🚀 Technical Features
- **MERN Stack** – MongoDB, Express, React, Node.js  
- **RESTful API** – Clean API architecture  
- **JWT Authentication** – Secure sessions  
- **Cloud Storage** – Cloudinary integration for media  
- **Payment Gateways** – Stripe & Razorpay  
- **Responsive Design** – Mobile-first approach  

---

## 📦 Installation

### 🔑 Prerequisites
- Node.js **v18+**  
- MongoDB **v6+**  
- npm or yarn  
### Backend Setup
# Clone the repository
git clone https://github.com/yourusername/ryzna-ecommerce.git
cd rynza-ecommerce/backend
# Install dependencies
npm install
# Copy environment variables
cp .env.example .env
# Edit .env with your configuration

# Start the server
npm run server

Admin Panel Setup
cd ../admin-panel

npm install
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
VITE_BACKEND_URL=http://localhost:4000

🏗️ Project Structure
ryzna-ecommerce/
├── backend/
│   ├── config/          # Database & service configurations
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   └── server.js        # Express server
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── context/     # React context providers
│   │   ├── pages/       # Page components
│   │   ├── assets/      # Images & static files
│   │   └── App.jsx      # Main App component
├── admin-panel/
│   └── src/
│       ├── components/  # Admin components
│       ├── pages/       # Admin pages
│       └── App.jsx      # Admin App component
└── README.md

📱 Usage
For Customers

Browse products with advanced filters

Add items to cart (with size/quantity)

Create account or login

Proceed to secure checkout

Pay with Stripe/Razorpay

Track orders in dashboard

For Administrators

Access admin panel at /admin

Manage products & upload images

Process orders & update status

Manage stock levels

Monitor users & sales activity

🛠️ Built With

Frontend: React, React Router, Context API, Axios, TailwindCSS

Backend: Node.js, Express.js, MongoDB, Mongoose

Authentication: JWT, bcryptjs

Payment: Stripe, Razorpay

Storage: Cloudinary, Multer

Deployment: Vercel, Heroku, MongoDB Atlas
🙏 Acknowledgments

Inspired by modern e-commerce platforms

UI crafted with Tailwind CSS

Icons from open source libraries

⭐ If you like this project, consider giving it a star!

Test cases are included