require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const multer = require('multer');
const cors = require('cors');

// Import routes
const listRoutes = require('./routes/listRoutes');
const listItemRoutes = require('./routes/listItemRoutes');
const listShareRoutes = require('./routes/listShareRoutes');
const authRoutes = require('./routes/authRoutes');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse form-data
const upload = multer();
app.use(upload.none());

// Configure CORS
const allowedOrigins = process.env.NODE_ENV === 'production'
  ? ['https://yourdomain.com']
  : ['http://localhost:3000'];

app.use(cors({
  origin: allowedOrigins,
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

// Debugging middleware to log the request body
app.use((req, res, next) => {
  console.log('Request body:', req.body);
  next();
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/lists', listRoutes);
app.use('/api/lists', listItemRoutes);
app.use('/api/lists', listShareRoutes);

// Start the server
const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(err => console.error(err));
