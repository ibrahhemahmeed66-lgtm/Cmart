const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    orderNumber: { type: String, required: true, unique: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    shippingAddress: {
      governorate: { type: String, required: true },
      city: { type: String, required: true },
      street: { type: String, required: true },
      notes: { type: String, default: '' }
    },
    orderItems: [
      {
        productId: { type: String, required: true },
        nameAr: { type: String, required: true },
        nameEn: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true, min: 1 },
        selectedColor: { type: String, default: '' }
      }
    ],
    paymentMethod: {
      type: String,
      enum: ['card', 'instapay', 'cod', 'valu'],
      default: 'cod'
    },
    subtotal: { type: Number, required: true },
    shippingFee: { type: Number, required: true, default: 0 },
    discount: { type: Number, required: true, default: 0 },
    couponCode: { type: String, default: '' },
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'processing'
    },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
