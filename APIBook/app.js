const express = require('express');
const app = express();
const morgan = require('morgan');
const booksRoute = require('./routes/book.route');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user.route');
const port = process.env.PORT || 3000;

// set  CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods",
        "GET,POST,PATCH,PUT,DELETE,OPTIONS");
    next();
});
app.use('/public', express.static(__dirname + path.join('/uploads')))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Hello From Express')
})
app.use('/books', booksRoute)
app.use('/users', usersRoute)
app.listen(port, () => {
    console.log('Server Listing port :' + port)
})