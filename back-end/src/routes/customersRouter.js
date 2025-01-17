const { Router } = require('express');
const customersController = require('../controllers/customersController');
const orderDetailsController = require('../controllers/orderDetailsController');
const salesController = require('../controllers/salesController');
const { isAuthenticated, restrictionLevel } = require('../api/middlewares/isAuthenticated');

const customersRouter = Router();

customersRouter.get('/orders', 
isAuthenticated(restrictionLevel(3)),
customersController.findAllOrders);

customersRouter.get('/orders/:id',
  isAuthenticated(restrictionLevel(3)),
  orderDetailsController.orderDetails);

customersRouter.put('/orders/:id',
  isAuthenticated(restrictionLevel(3)),
  orderDetailsController.orderStatusUpdate);

customersRouter.get('/products', customersController.getAllProducts);
customersRouter.post('/checkout', salesController.postSale);
  
module.exports = customersRouter;
