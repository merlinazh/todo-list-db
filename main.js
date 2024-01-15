const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const todoRoutes = require('./routes/todo')
const authRoutes = require('./routes/auth')

dotenv.config()
app.use(express.json())

const url = process.env.MONGODB_URL;

mongoose.connect(url)

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('we are connected'))

app.use(todoRoutes)
app.use(authRoutes)

app.get('/', (req, res) => {
    res.send('Todo');
});

app.listen(process.env.PORT || 3030, () => {
    console.log(`listening port: ${process.env.PORT}`);
})


