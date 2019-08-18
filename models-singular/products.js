'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
//import the schema of categories here
const productsSchema = require('./products-schema');

class Products {

  constructor() {
  }

  get(_id) {
    console.log('got in get method');
    // Call the appropriate mongoose method to get
    // one or more records
    // If 1, return it as a plain object
    // If 2, return it as an object like this:
    // { count: ##, results: [{}, {}] }
    if(_id){
      console.log('got in get method and check id');

      if(productsSchema.findOne({_id})){
        // console.log('this is the id obj it found',productsSchema.findOne({_id}));
        return productsSchema.findOne({_id});
      }else{
        console.log('this is the array of objs it found',productsSchema.find())
        return {count: productsSchema.find().length, results: productsSchema.find()};
      }
      }
    return Promise.reject(new Error('Invalid Id'));
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    const newRecord = new productsSchema(record);
    //this will return a resolved promise into a new product
    return newRecord.save();
  }

  update(_id) {
    // Call the appropriate mongoose method to update a record
    // console.log('This is in update funtion', _id,updateData);
    // console.log('This is  after updated', productsSchema.findByIdAndUpdate({id: _id},updateData));
    const updateObj = productsSchema.findOne({id:_id});
    console.log(updateObj);
    return updateObj.update(updateData);
    // return productsSchema.findByIdAndUpdate({id: _id},record, {new:true});
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    return productsSchema.deleteOne({id: _id});
  }

}

module.exports = Products;