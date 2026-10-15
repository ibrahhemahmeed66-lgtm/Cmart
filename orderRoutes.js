const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getOrderByNumber, updateOrderStatus } = require('../controllers/orderController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.route('/').post(createOrder).get(protect, adminOnly, getOrders);
router.route('/track/:orderNumber').get(getOrderByNumber);
router.route('/:id/status').put(protect, adminOnly, updateOrderStatus);

module.exports = router;
