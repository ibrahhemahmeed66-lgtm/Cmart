const { initialCoupons } = require('../data/seedData');

let couponsStore = [...initialCoupons];

const validateCoupon = (req, res) => {
  const { code, orderTotal } = req.body;
  const coupon = couponsStore.find((c) => c.code.toUpperCase() === (code || '').toUpperCase() && c.isActive);
  if (!coupon) {
    return res.status(404).json({ success: false, message: 'كود الخصم غير صالح أو منتهي' });
  }
  if (orderTotal < coupon.minOrderAmount) {
    return res.status(400).json({
      success: false,
      message: `الحد الأدنى لاستخدام الكوبون هو ${coupon.minOrderAmount} ج.م`
    });
  }
  const discount = Math.min((orderTotal * coupon.discountPercent) / 100, coupon.maxDiscount);
  res.json({ success: true, data: { coupon, discount } });
};

const getCoupons = (req, res) => {
  res.json({ success: true, data: couponsStore });
};

module.exports = { validateCoupon, getCoupons };
