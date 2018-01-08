/* set up the router */
const express = require('express');
const pizzaRoutes = express.Router();


/* import the pizza data */
const pizzaData = require('../db/pizza');
/* you'll need two routes:

  - all pizza
  - individual pizza
  - BONUS: can you get individual pizza to work with the `flavorKey` property in the database? Maybe use some array methods... it would be convenient to be able to go to `/pizza/pepperoni` instead of `/pizza/0`.
*/
pizzaRoutes.get('/', function(request, response) {
  response.render('pizza/pizza-index.ejs', {
    pizza: pizzaData,
    pizzaClass: 'my-pizza',
    documentTitle: 'Ada\'s Pizza!'
  });
});

pizzaRoutes.get('/:id', function(request, response) {
  let id = request.params.id;
  response.render('pizza/pizza-single.ejs', {
    documentTitle: 'Ada\'s Pizza!',
    pizzaClass: 'single-pizza',
    pizza: pizzaData[id]
  })
})

/* export the router */
module.exports = pizzaRoutes;
