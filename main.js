// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// API endpoint to receive data from the frontend
app.post('/api/data', (req, res) => {
  const { data } = req.body; // Assuming the frontend sends data in the request body
  // Process the received data
  // ...

  // Send a response back to the frontend
  res.json({ message: 'Data received successfully' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
