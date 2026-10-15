const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true }
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    sku: { type: String, required: true, unique: true },
    nameAr: { type: String, required: true },
    nameEn: { type: String, required: true },
    brand: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ['electronics', 'phones', 'laptops', 'appliances', 'fashion', 'gaming']
    },
    price: { type: Number, required: true, min: 0 },
    originalPrice: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, default: 0 },
    rating: { type: Number, required: true, default: 4.5 },
    reviewsCount: { type: Number, required: true, default: 0 },
    featured: { type: Boolean, default: false },
    badgeAr: { type: String, default: '' },
    badgeEn: { type: String, default: '' },
    descriptionAr: { type: String, required: true },
    descriptionEn: { type: String, required: true },
    specs: [{ labelAr: String, labelEn: String, value: String }],
    colors: [String],
    image: { type: String, required: true },
    reviews: [reviewSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
