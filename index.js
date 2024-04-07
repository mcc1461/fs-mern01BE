const express = require('express');
const app = express();

const mongoose = require('mongoose');

app.use(express.json());

app.get('/', (req, res) => {
    // res.json({ message: 'Merhaba Arkadaşlar' });
    res.send('Hello From BACKEND SIDE (mcc1461)');
});

app.listen(8005, () => {
    console.log('Server is running on port 8005');
});
