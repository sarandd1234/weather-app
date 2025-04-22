const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

// API endpoint example
app.get('/api/weather', (req, res) => {
  res.json({ message: 'Weather endpoint works!' });
});

// Catch-all for React frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});