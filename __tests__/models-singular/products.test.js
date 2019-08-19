// 'use strict';

// const supergoose = require('../supergoose.js');

// const Products = require('../../models-singular/products');
// let products = new Products();

// describe('Products Model (Singular)', () => {

//   // How will you handle both the happy path and edge cases in these tests?

//   it('can create() a new product', () => {
//     const testProducts = {
//       name: 'apples',
//       description: 'There will be some apples here',
//       quantity: 10,
//     };
//     return products.create(testProducts)

//       .then(savedProducts=>{
//         Object.keys(testProducts).forEach(key=>{
//           expect(savedProducts[key]).toEqual(testProducts[key]);
//         })
//       })

//   //     .catch(err=>console.log(err,'There is something wrong with the create test'));
//   });

//   it('can get() a product', () => {
//     const testProducts = {
//       name: 'apples',
//       description: 'There will be some apples here',
//       quantity: 10,
//     };
//     return products.create(testProducts)
      
//       .then(savedProducts=>{
//         return products.get(savedProducts._id);
//       })

//       .then(resolvedProducts=>{
//         Object.keys(testProducts).forEach(key=>{
//           expect(resolvedProducts[key]).toEqual(testProducts[key]);
//         });
//       })
//       // .catch(err=>{console.log(err)});
//   });

//   it('can get() all Products', () => {
//     const testProducts = {
//       name: 'apples',
//       description: 'There will be some apples here',
//       quantity: 10,
//     };
//     return products.create(testProducts)
      
//       .then((savedProducts)=>{
//         return products.get('5d576e21ae7cf9402711da3f');
//       })

//       .then(resolvedProducts=>{
//         console.log('resolvedProduct in the get all test', resolvedProducts);
//         Object.keys(testProducts).forEach(key=>{
//           expect(resolvedProducts[key]).toEqual(testProducts[key]);
//       })
//       });
//   });

//   it('can update() a product', () => {
//     const testProducts = {
//       name: 'apples',
//       description: 'There will be some apples here',
//       quantity: 10,
//     };
//     return products.create(testProducts)

//       .then(savedProducts=>{
//         // console.log('got in savedProducts', products.update({id: savedProducts._id},{name: 'Pear'}));
//         return products.update({id: savedProducts._id},{name: 'Banana'});
//       })

//       .then(updatedProducts=>{
//         // console.log('got in updated last then test', updatedProducts.find({name:'Peter'}));
//         expect (updatedProducts.name).toEqual('Banana');
//       })
//     });
        
    
//     it('can delete() a product', () => {
//       const testProducts = {
//             name: 'apples',
//             description: 'There will be some apples here',
//             quantity: 10,
//           };
//           return products.create(testProducts)

//           .then(savedProducts=>{
//             return products.delete(savedProducts._id);
//           })

//           .then(productsAfterDelete=>{
//             expect(products.get({name: 'apples'})).toEqual(products);
//           })
//         });

// });