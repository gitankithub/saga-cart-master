const express = require('express');

const MiscController = require('./../controllers/MiscController');

const misc = express.Router();

misc.get('/user/:id', MiscController.getUserById);

misc.get('/users/', MiscController.getUsers);

misc.get('/items/:ids', MiscController.getItemsById);

misc.get('/prices/:symbol/:ids', MiscController.getPricesByIdAndCurrency);

misc.get('/shipping/:items', MiscController.getShippingCost);

misc.get('/tax/:symbol', MiscController.getTaxByCurrency);

module.exports = misc;
