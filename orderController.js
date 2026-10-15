let ordersStore = [
  {
    id: 'ord-1001',
    orderNumber: 'CM-2026-8841',
    customerName: 'أحمد محمود',
    customerEmail: 'ahmed@example.com',
    customerPhone: '01012345678',
    shippingAddress: { governorate: 'القاهرة', city: 'مدينة نصر', street: 'شارع عباس العقاد، عمارة 14' },
    paymentMethod: 'instapay',
    totalAmount: 4250,
    status: 'delivered',
    createdAt: '2026-10-12T14:20:00Z'
  }
];

const createOrder = (req, res) => {
  const { customerName, customerEmail, customerPhone, shippingAddress, orderItems, paymentMethod, subtotal, shippingFee, discount, couponCode, totalAmount } = req.body;
  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ success: false, message: 'سلة التسوق فارغة' });
  }
  const newOrder = {
    id: `ord-${Date.now()}`,
    orderNumber: `CM-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName,
    customerEmail,
    customerPhone,
    shippingAddress,
    orderItems,
    paymentMethod: paymentMethod || 'cod',
    subtotal,
    shippingFee,
    discount,
    couponCode,
    totalAmount,
    status: 'processing',
    createdAt: new Date().toISOString()
  };
  ordersStore.unshift(newOrder);
  res.status(201).json({ success: true, data: newOrder });
};

const getOrders = (req, res) => {
  res.json({ success: true, count: ordersStore.length, data: ordersStore });
};

const getOrderByNumber = (req, res) => {
  const order = ordersStore.find((o) => o.orderNumber.toLowerCase() === req.params.orderNumber.toLowerCase());
  if (!order) {
    return res.status(404).json({ success: false, message: 'لم يتم العثور على الطلب' });
  }
  res.json({ success: true, data: order });
};

const updateOrderStatus = (req, res) => {
  const order = ordersStore.find((o) => o.id === req.params.id || o.orderNumber === req.params.id);
  if (!order) {
    return res.status(404).json({ success: false, message: 'لم يتم العثور على الطلب' });
  }
  order.status = req.body.status || order.status;
  res.json({ success: true, data: order });
};

module.exports = { createOrder, getOrders, getOrderByNumber, updateOrderStatus };
