require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// Import routes
const listRoutes = require('./routes/listRoutes');
const listItemRoutes = require('./routes/listItemRoutes');
const listShareRoutes = require('./routes/listShareRoutes');

// Initialize Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/lists', listRoutes);
app.use('/api/lists', listItemRoutes);
app.use('/api/lists', listShareRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
