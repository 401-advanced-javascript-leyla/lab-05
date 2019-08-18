'use strict';

const supergoose = require('../supergoose.js');

const Categories = require('../../models-singular/categories');
let categories = new Categories();

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
        })
      })

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
      })
      // .catch(err=>{console.log(err)});
  });

  it('can get() all categories', () => {
    const testCategories = {
      name: 'fruits',
      description: 'There will be some fruits here',
    };
    return categories.create(testCategories)
      
      .then((savedCategories)=>{
        return categories.get('5d576e21ae7cf9402711da3f');
      })

      .then(resolvedCategories=>{
        console.log('resolvedCate in the get all test', resolvedCategories);
      //   Object.keys(testCategories).forEach(key=>{
      //     expect(resolvedCategories[key]).toEqual(testCategories[key]);
      // })
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
        return categories.update({id: savedCategories._id},{name: 'Banana'});
      })

      .then(updatedCategories=>{
        // console.log('got in updated last then test', updatedCategories.find({name:'Peter'}));
        expect (categories.find()).toEqual(updatedCategories.find());
      })
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
            expect(categories.find({name: 'fruits'})).toEqual(false);
          })
        });

});