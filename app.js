const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from res.send')
});

app.listen(3000, () => {
    console.log('I\'m listening...')
})