const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, uppercase: true, trim: true },
    discountPercent: { type: Number, required: true, min: 1, max: 90 },
    minOrderAmount: { type: Number, default: 0 },
    maxDiscount: { type: Number, default: 2000 },
    isActive: { type: Boolean, default: true },
    descriptionAr: { type: String, default: '' },
    descriptionEn: { type: String, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Coupon', couponSchema);
