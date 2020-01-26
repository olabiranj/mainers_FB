const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const feedRoutes = require('./routes/feeds');
const app = express();

let db_uri = "mongodb://localhost:27017/giantApi";


mongoose.connect(db_uri, { useNewUrlParser: true, useCreateIndex: true })
.then(console.log("database connected"))
.catch(err => console.log(err));

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRoutes);
app.use('/api/users', userRoutes);
app.use('/api/feeds', feedRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    })
})

module.exports = app;
