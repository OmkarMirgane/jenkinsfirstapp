// Import required modules
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();

// Define a route to serve the HTML file
app.get('/', (req, res) => {
    // Send the HTML file as the response
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});