const express = require('express');
const cors = require('cors')
const R = require('ramda');
const data = require('./data.json');

const app = express();

app.use(cors())

app.get('/parks', (req, res) => {
    res.send(data);
});

app.listen(8001, () => {
    console.log('Server running on http://localhost:8001');
});

