const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Import data
const characters = require('./public/data/characters.json');

// Set port and variables
const port = 3200;
app.use(express.json());
app.use(express.static('public'));

// Gets
app.get('/', (req, res) => {
    res.send('Waterdeep API');
});

app.get('/api/characters', (req, res) => {
    res.json(characters);
});

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});