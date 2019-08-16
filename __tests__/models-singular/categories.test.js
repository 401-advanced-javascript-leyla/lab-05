'use strict';

const supergoose = require('../supergoose.js');

const Categories = require('../../models-singular/categories.js');
// let categories = new Categories();

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    let categories = new Categories();
    const testCategories = {
      name: 'fruits',
      description: 'There will be some fruits here',
    };
    return categories.create(testCategories)

      .then(savedCategories=>{
        Object.keys(testCategories).forEach(key=>{
          expect(savedCategories)[key].toEqual(testCategories[key]);
        })
      })

      .catch(err=>console.log(err,'There is something wrong with the create test'));
  });

  it('can get() a category', () => {
  });

  it('can get() all categories', () => {
  });

  it('can update() a category', () => {
  });

  it('can delete() a category', () => {
  });

});