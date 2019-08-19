'use strict';

const mongoose = require('mongoose');

// Require your model
const Categories = require('./models-singular/categories');
const Products = require('./models-singular/products');



// Mongoose Server URI
const MONGOOSE_URI = 'mongodb+srv://leylali:loisli1155665@cluster0-o9fll.mongodb.net/test?retryWrites=true&w=majority';

// Connect
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true});

// Do some work


// Disconnect
mongoose.disconnect();
