'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
//import the schema of categories here
const categoriesSchema = require('./categories-schema');

class Categories {

  constructor() {
  }

  get(_id) {
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
    if(_id){
      if(categoriesSchema.find({_id})){
        console.log('found it');
      }
    }
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    const newRecord = new categoriesSchema(record);
    //this will return a resolved promise into a new category
    return newRecord.save();
  }

  update(_id, record) {
    // Call the appropriate mongoose method to update a record
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
  }

}

module.exports = Categories;
