require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');


// Import routes
const listRoutes = require('./routes/listRoutes');
const listItemRoutes = require('./routes/listItemRoutes');
const listShareRoutes = require('./routes/listShareRoutes');
const authRoutes = require('./routes/authRoutes');

// Import controllers
//const listController = require('./controllers/listController');

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
