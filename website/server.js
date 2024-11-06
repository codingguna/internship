const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic API route
app.get('/api/greeting', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
