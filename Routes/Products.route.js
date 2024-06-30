const express = require("express");
const router = express.Router();

const ProductsController = require('../Controllers/Products.Controller')

router.get('/',ProductsController.getAllProducts );

router.get('/:productId', ProductsController.getSingleProduct);

router.put('/:productId', ProductsController.updateSingleProduct);


router.delete('/:productId', ProductsController.deleteSingleProduct );


module.exports = router;