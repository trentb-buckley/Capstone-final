const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// let {scoreArr} = require('./home.js')

app.get('/api/scores', (req, res) => {
    let scores = ['Bobby : 22.64s','Brandon : 24.43s','Tyler : 27.99s',]
    res.status(200).send(scores)
})
app.get('/api/cardarr', (req, res) => {
    let cardArr = ["one", "two", "one", "two", "three", "three", "four", "four", "five", "five", "six", "six", "seven", "seven", "eight", "eight"]
    res.status(200).send(cardArr)
})
app.listen(3888, () => {
    console.log('Server is up on port 3888');
});
