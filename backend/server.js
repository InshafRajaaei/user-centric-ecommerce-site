import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 4000

// Middlewares
app.use(express.json())
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // Allow any Vercel deployment (frontend & admin) and localhost
    if (
      origin.endsWith('.vercel.app') || 
      origin.includes('localhost') ||
      origin.includes('127.0.0.1')
    ) {
      return callback(null, true);
    }
    
    console.log('Blocked by CORS:', origin);
    callback(new Error('Not allowed by CORS'));
  },
  credentials: true
}));

// API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
  res.json({ 
    message: "RYNZA API Working",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  })
})

// Health check endpoint for Railway/Render
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    database: 'Connected', 
    timestamp: new Date().toISOString() 
  })
})

// Debug endpoint to check environment variables (Safe - doesn't expose values)
app.get('/api/debug-config', (req, res) => {
  res.json({
    env_vars: {
      MONGODB_URI: !!process.env.MONGODB_URI,
      MONGODB_URL: !!process.env.MONGODB_URL,
      CLOUDINARY_API_KEY: !!process.env.CLOUDINARY_API_KEY,
      CLOUDINARY_NAME: !!process.env.CLOUDINARY_NAME,
      NODE_ENV: process.env.NODE_ENV
    },
    mongo_connection: mongoose.connection.readyState, // 0: disconnected, 1: connected, 2: connecting, 3: disconnecting
    timestamp: new Date().toISOString()
  });
});

// Initialize database and cloudinary connections
const initializeApp = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    console.log('✅ MongoDB Connected successfully');
    
    // Connect to Cloudinary
    await connectCloudinary();
    console.log('✅ Cloudinary Connected successfully');
    
    // Start server
    if (process.env.NODE_ENV !== 'test') {
      app.listen(port, () => {
        console.log(`🚀 Server started on PORT: ${port}`);
        console.log(`🌐 Environment: ${process.env.NODE_ENV || 'development'}`);
      });
    }
  } catch (error) {
    console.error('❌ Failed to initialize application:', error);
    process.exit(1); // Exit with failure
  }
};

// Start the application only if not in Vercel (Vercel handles starting the server)
if (process.env.NODE_ENV !== 'production') {
  initializeApp();
}

export default app