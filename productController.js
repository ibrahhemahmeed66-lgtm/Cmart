const { initialProducts } = require('../data/seedData');

let productsStore = [...initialProducts];

// @desc    Get all products with filtering, search & sorting
// @route   GET /api/products
const getProducts = (req, res) => {
  const { category, search, sort, minPrice, maxPrice, inStock } = req.query;
  let result = [...productsStore];

  if (category && category !== 'all') {
    result = result.filter((p) => p.category === category);
  }
  if (search) {
    const q = search.toLowerCase();
    result = result.filter(
      (p) =>
        p.nameAr.toLowerCase().includes(q) ||
        p.nameEn.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    );
  }
  if (minPrice) result = result.filter((p) => p.price >= Number(minPrice));
  if (maxPrice) result = result.filter((p) => p.price <= Number(maxPrice));
  if (inStock === 'true') result = result.filter((p) => p.stock > 0);

  if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
  else if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
  else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating);

  res.json({ success: true, count: result.length, data: result });
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
const getProductById = (req, res) => {
  const product = productsStore.find((p) => p.id === req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, message: 'المنتج غير موجود (Product not found)' });
  }
  res.json({ success: true, data: product });
};

// @desc    Create a new product (Admin)
// @route   POST /api/products
const createProduct = (req, res) => {
  const newProduct = {
    id: `prod-${Date.now()}`,
    sku: req.body.sku || `CM-NEW-${Math.floor(100 + Math.random() * 900)}`,
    rating: 5.0,
    reviewsCount: 1,
    ...req.body
  };
  productsStore.unshift(newProduct);
  res.status(201).json({ success: true, data: newProduct });
};

// @desc    Update product (Admin)
// @route   PUT /api/products/:id
const updateProduct = (req, res) => {
  const idx = productsStore.findIndex((p) => p.id === req.params.id);
  if (idx === -1) {
    return res.status(404).json({ success: false, message: 'المنتج غير موجود' });
  }
  productsStore[idx] = { ...productsStore[idx], ...req.body };
  res.json({ success: true, data: productsStore[idx] });
};

// @desc    Delete product (Admin)
// @route   DELETE /api/products/:id
const deleteProduct = (req, res) => {
  productsStore = productsStore.filter((p) => p.id !== req.params.id);
  res.json({ success: true, message: 'تم حذف المنتج بنجاح' });
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
