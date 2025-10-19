// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import connectCloudinary from './config/cloudinary.js'
// import userRouter from './routes/userRoute.js'
// import productRouter from './routes/productRoute.js'
// import cartRouter from './routes/cartRoute.js'
// import orderRouter from './routes/orderRoute.js'

// // App Config
// const app = express()
// const port = process.env.PORT || 4000
// // connectDB()
// // connectCloudinary()

// // middlewares

// app.use(express.json())
// app.use(cors())

// // api endpoints
// app.use('/api/user',userRouter)
// app.use('/api/product',productRouter)
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRouter)

// app.get('/',(req,res)=>{
//     res.send("API Working")
// })

// // Only listen if not in test environment
// if (process.env.NODE_ENV !== 'test') {
//   connectDB()
//   connectCloudinary()
//   app.listen(port, () => console.log('Server started on PORT : ' + port))
// }
// export default app
// // app.listen(port, ()=> console.log('Server started on PORT : '+ port))

import express from 'express'
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
    
    const allowedOrigins = [
      'https://ryzna-frontend.up.railway.app',
      'https://ryzna-admin.up.railway.app',
      'http://localhost:5173',
      'http://localhost:5174',
      'https://your-frontend-app.vercel.app', // Add your actual frontend URLs
      'https://your-admin-app.vercel.app'     // Add your actual admin URLs
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1 || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log('Blocked by CORS:', origin);
      callback(new Error('Not allowed by CORS'));
    }
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

// Health check endpoint for Railway
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    database: 'Connected', 
    timestamp: new Date().toISOString() 
  })
})

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

// Start the application
initializeApp();

export default app