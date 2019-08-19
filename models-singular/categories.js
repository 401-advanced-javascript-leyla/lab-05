'use strict';

// Where is our schema defined?
// How do we get it in here so we can run methods on it?
//import the schema of categories here
const categoriesSchema = require('./categories-schema');

class Categories {

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

      if(categoriesSchema.findOne({_id})){
        // console.log('this is the id obj it found',categoriesSchema.findOne({_id}));
        return categoriesSchema.findOne({_id});
      }
      }else{
        return categoriesSchema.find()
        .then(result=>{
          return {count: result.length, results: result}
        })
      }
    // return Promise.reject(new Error('Invalid Id'));
  }

  create(record) {
    // Call the appropriate mongoose method to create a new record
    const newRecord = new categoriesSchema(record);
    //this will return a resolved promise into a new category
    return newRecord.save();
  }

  update(_id,record) {
    // Call the appropriate mongoose method to update a record
    // console.log('This is in update funtion', _id,updateData);
    // console.log('This is  after updated', categoriesSchema.findByIdAndUpdate({id: _id},updateData));
    // const updateObj = categoriesSchema.findOne({id:_id});
    // return updateObj
    //   // .then(updateObj=>{
    //   //   return updateObj.update(record);
    //   // })
    // // console.log(updateObj);
    //   .then()
      return categoriesSchema.findByIdAndUpdate(_id,record, {new:true});
  }

  delete(_id) {
    // Call the appropriate mongoose method to delete a record
    return categoriesSchema.findByIdAndDelete(_id);
  }

}

module.exports = Categories;
