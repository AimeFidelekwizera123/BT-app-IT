const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the pages directory
app.use(express.static(path.join(__dirname, 'pages')));

// Redirect root to the main page (home.html)
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

// Simple health check
app.get('/health', (req, res) => {
	res.json({ status: 'ok' });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server listening on port 3000');
});
