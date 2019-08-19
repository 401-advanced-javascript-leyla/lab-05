'use strict';

const supergoose = require('../supergoose.js');

const categories = require('../../models-modular/categories/categories');
// let categories = new Categories();

describe('Categories Model (Singular)', () => {

  // How will you handle both the happy path and edge cases in these tests?

  it('can create() a new category', () => {
    const testCategories = {
      name: 'fruits',
      description: 'There will be some fruits here',
    };
    return categories.create(testCategories)

      .then(savedCategories=>{
        Object.keys(testCategories).forEach(key=>{
          expect(savedCategories[key]).toEqual(testCategories[key]);
        });
      });

  //     .catch(err=>console.log(err,'There is something wrong with the create test'));
  });

  it('can get() a category', () => {
    const testCategories = {
      name: 'fruits',
      description: 'There will be some fruits here',
    };
    return categories.create(testCategories)

      .then(savedCategories=>{
        return categories.get(savedCategories._id);
      })

      .then(resolvedCategories=>{
        Object.keys(testCategories).forEach(key=>{
          expect(resolvedCategories[key]).toEqual(testCategories[key]);
        });
      });
  });

  it('can get() all categories', () => {
    const testCategories = {
      name: 'fruits',
      description: 'There will be some fruits here',
    };
    return categories.create(testCategories)

      .then((savedCategories)=>{
        return categories.get();
      })

      .then(resolvedCategories=>{
        console.log('resolvedCate in the get all test', resolvedCategories);

        expect(resolvedCategories.count).toEqual(3);
      });
  });

  it('can update() a category', () => {
    const testCategories = {
      name: 'fruits',
      description: 'There will be some fruits here',
    };
    return categories.create(testCategories)

      .then(savedCategories=>{
        // console.log('got in savedCate', categories.update({id: savedCategories._id},{name: 'Peter'}));
        return categories.update(savedCategories._id, {name: 'Banana', description: 'updated'});
      })
      
      .then((record) => {
        return categories.get(record._id);
      })

      .then(updatedCategories=>{
        // console.log('got in updated last then test', categories.get({name:'Banana'}));
        expect (updatedCategories.name).toEqual('Banana');
      });
  });


  it('can delete() a category', () => {
    const testCategories = {
      name: 'fruits',
      description: 'There will be some fruits here',
    };
    return categories.create(testCategories)

      .then(savedCategories=>{
        return categories.delete(savedCategories._id);
      })

      .then(categoriesAfterDelete=>{
        return categories.get();
      })

      .then(gotCategories=>{
        expect(gotCategories.count).toEqual(4);
      });
  });

});
