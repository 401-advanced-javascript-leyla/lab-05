'use strict';

/** Class representing a generic mongo model. */
class Model {

  /**
   * Model Constructor
   * @param schema {object} - mongo schema
   */
  constructor(schema) {
    this.schema = schema;
  }

  /**
   * Retrieves one or more records
   * @param _id {string} optional mongo record id
   * @returns {count:#,results:[{*}]} | {*}
   */
  get(_id) {
    if(_id){
      console.log('got in get method and check id');

      if(schema.findOne({_id})){
        // console.log('this is the id obj it found',schema.findOne({_id}));
        return schema.findOne({_id});
      }else{
        console.log('this is the array of objs it found',schema.find())
        return {count: schema.find().length, results: schema.find()};
      }
      }
    return Promise.reject(new Error('Invalid Id'));

  }

  /**
   * Create a new record
   * @param record {object} matches the format of the schema
   * @returns {*}
   */
  create(record) {
    // Call the appropriate mongoose method to create a new record
    const newRecord = new schema(record);
    //this will return a resolved promise into a new product
    return newRecord.save();

  }

  /**
   * Replaces a record in the database
   * @param _id {string} Mongo Record ID
   * @param record {object} The record data to replace. ID is a required field
   * @returns {*}
   */
  update(_id, record) {
    const updateObj = schema.findOne({id:_id});
    console.log(updateObj);
    return updateObj.update(record);
  }

  /**
   * Deletes a recod in the model
   * @param _id {string} Mongo Record ID
   * @returns {*}
   */
  delete(_id) {
    return schema.deleteOne({id: _id});

  }

}

module.exports = Model;
