'use strict';

const Model = require('../mongo.js');
const schema = require('./products-schema.js');

// How can we connect ourselves to the mongo interface?
// What do we export?

const products = new Model(schema);

module.exports = products;