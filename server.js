const { join } = require('path');
const express = require('express');
const { getData } = require('./utils');
const { users } = require('./data.js');
const { getUsers } = require('./utils');

const app = express();

app.use(express.static(join(__dirname, 'dist')));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.get('/list', (req, res) => {

    const { count } = req.query;

    const w = getData(data, count);


    res.send(w);
});

app.get('/users', (req, res) => {

    const { firstName } = req.query;

    const m = getUsers(users, firstName);

    res.send(m);
});

// TODO метод обработки запроса здесь

app.listen(3000, () => console.log('port 3000'));
