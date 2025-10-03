# 🛍️ RYNZA - Modern E-Commerce Platform

[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0-green)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3-cyan)](https://tailwindcss.com/)

---

![RYNZA Preview](https://via.placeholder.com/800x400/3B82F6/FFFFFF?text=RYNZA+E-Commerce+Platform)

**RYNZA** is a **full-stack e-commerce platform** built with the **MERN stack**, featuring:
- ✅ Modern responsive UI
- ✅ Secure payment processing (Stripe & Razorpay)
- ✅ Comprehensive **Admin Dashboard** for store management

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

```bash
# Clone the repository
git clone https://github.com/yourusername/ryzna-ecommerce.git

# Navigate to the backend directory
cd rynza-ecommerce/backend

# Install dependencies
npm install

# Create the environment file from the example
cp .env.example .env

# Edit .env with your configuration
# (see Environment Variables section below)

# Start the server
npm run server

Admin Panel Setup

# Navigate to the admin-panel directory
cd ../admin-panel

# Install dependencies
npm install

# Create the environment file from the example
cp .env.example .env

# Edit .env with your configuration
# (see Environment Variables section below)

# Start the development server
npm run dev
