import React, { useState, useMemo } from 'react';
import {
  ShoppingBag,
  ShoppingCart,
  Heart,
  Search,
  Star,
  Trash2,
  Plus,
  CheckCircle2,
  Truck,
  ShieldCheck,
  RefreshCw,
  CreditCard,
  Package,
  BarChart3,
  User,
  X,
  ArrowUpDown,
  Eye,
  Code2,
  Server,
  Copy,
  Check,
  Sparkles,
  Tag,
  Layers,
  Globe,
  Moon,
  Sun,
  Play,
  AlertCircle,
  Flame
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const HERO_IMAGE = "user_uploaded_files/ttl=63d/tool_generated/watermarked_img_9009144047811449925.jpg";
const IMG_HEADPHONES = "user_uploaded_files/ttl=63d/tool_generated/watermarked_img_16433009544978836969.jpg";
const IMG_PHONE_WATCH = "user_uploaded_files/ttl=63d/tool_generated/watermarked_img_12473268075637445809.jpg";
const IMG_LAPTOP = "user_uploaded_files/ttl=63d/tool_generated/watermarked_img_4129673604966990311.jpg";
const IMG_ESPRESSO = "user_uploaded_files/ttl=63d/tool_generated/watermarked_img_7306723326221143685.jpg";
const IMG_FASHION = "user_uploaded_files/ttl=63d/tool_generated/watermarked_img_7038087193740648730.jpg";

const INITIAL_PRODUCTS = [
  {
    id: 'prod-1',
    sku: 'CM-AUD-001',
    nameAr: 'سماعة الرأس اللاسلكية C-Pulse Pro عازلة للضوضاء',
    nameEn: 'C-Pulse Pro Wireless ANC Studio Headphones',
    brand: 'SonicWave',
    category: 'electronics',
    price: 4250,
    originalPrice: 5400,
    stock: 24,
    rating: 4.9,
    reviewsCount: 184,
    featured: true,
    badgeAr: 'الأكثر مبيعاً',
    badgeEn: 'Best Seller',
    image: IMG_HEADPHONES,
    colors: ['أسود تيتانيوم', 'فضي معدني', 'أخضر زمردي'],
    descriptionAr: 'سماعة احترافية بتقنية العزل النشط للضوضاء الهجين (Hybrid ANC) مع بطارية تدوم حتى 45 ساعة، شحن فائق السرعة Type-C، وصوت محيطي ثلاثي الأبعاد فائق النقاء.',
    descriptionEn: 'Studio-grade hybrid active noise canceling headphones with 45-hour battery life, USB-C fast charge, and spatial 3D audio.',
    specs: [
      { labelAr: 'عمر البطارية', labelEn: 'Battery Life', value: '45 Hours (ANC On)' },
      { labelAr: 'البلوتوث', labelEn: 'Bluetooth', value: 'v5.4 Multipoint' },
      { labelAr: 'الوزن', labelEn: 'Weight', value: '255g Ultra-Light' },
      { labelAr: 'الضمان', labelEn: 'Warranty', value: '24 Months Official' }
    ],
    reviews: [
      { id: 'r1', userName: 'أحمد طارق', rating: 5, date: '2026-10-05', comment: 'عزل الضوضاء ممتاز جداً في المواصلات والمكالمات، والبطارية بتقعد معايا أسبوع كامل!' },
      { id: 'r2', userName: 'سارة نبيل', rating: 5, date: '2026-09-28', comment: 'خامات فخمة جداً ومريحة على الأذن حتى مع الاستخدام الطويل.' }
    ]
  },
  {
    id: 'prod-2',
    sku: 'CM-MOB-002',
    nameAr: 'باقة الهاتف الذكي التيتانيوم X15 Pro مع الساعة الذكية',
    nameEn: 'Titanium X15 Pro Flagship Smartphone + SmartWatch Bundle',
    brand: 'NovaTech',
    category: 'phones',
    price: 38900,
    originalPrice: 44500,
    stock: 12,
    rating: 4.9,
    reviewsCount: 142,
    featured: true,
    badgeAr: 'باقة التوفير',
    badgeEn: 'Bundle Deal',
    image: IMG_PHONE_WATCH,
    colors: ['تيتانيوم طبيعي', 'تيتانيوم أسود', 'أزرق ليلي'],
    descriptionAr: 'ثنائي القوة والأناقة: هاتف ذكي بهيكل تيتانيوم، شاشة 6.8 بوصة AMOLED بتردد 120Hz وكاميرا 200 ميجابكسل، مرفق مع ساعة ذكية رياضية بشاشة AMOLED وتتبع نبض القلب والأكسجين.',
    descriptionEn: 'Flagship titanium smartphone featuring a 120Hz LTPO AMOLED display and 200MP camera, bundled with a waterproof GPS fitness smartwatch.',
    specs: [
      { labelAr: 'المعالج والذاكرة', labelEn: 'Chip & RAM', value: 'Octa-Core 3nm / 12GB RAM' },
      { labelAr: 'المساحة التخزينية', labelEn: 'Storage', value: '512GB UFS 4.0' },
      { labelAr: 'الشاشة', labelEn: 'Display', value: '6.8" 120Hz AMOLED + 1.5" Watch' },
      { labelAr: 'مقاومة الماء', labelEn: 'Waterproof', value: 'IP68 / 5ATM' }
    ],
    reviews: [
      { id: 'r3', userName: 'محمد الشناوي', rating: 5, date: '2026-10-10', comment: 'العرض وفر عليا أكتر من 5000 جنيه، الموبايل سريع جداً والساعة بطاريتها ممتازة.' }
    ]
  },
  {
    id: 'prod-3',
    sku: 'CM-LAP-003',
    nameAr: 'لابتوب ألترا بوك C-Book Air 14 مع ماوس لاسلكي احترافي',
    nameEn: 'C-Book Air Ultra-Slim Laptop 14" + Ergonomic Mouse',
    brand: 'AeroCompute',
    category: 'laptops',
    price: 46500,
    originalPrice: 51000,
    stock: 9,
    rating: 4.8,
    reviewsCount: 97,
    featured: true,
    badgeAr: 'إصدار 2026',
    badgeEn: '2026 Edition',
    image: IMG_LAPTOP,
    colors: ['رمادي فلكي', 'فضي كلاسيكي'],
    descriptionAr: 'لابتوب فائق النحافة للمبرمجين والمصممين بهيكل ألومنيوم متين، رام 16 جيجابايت وهارد 1 تيرابايت NVMe SSD فائق السرعة مع ماوس لاسلكي مريح لليد.',
    descriptionEn: 'Ultra-thin CNC aluminum laptop with 16GB unified memory, 1TB NVMe SSD, 18-hour battery, and wireless ergonomic productivity mouse.',
    specs: [
      { labelAr: 'الذاكرة والتخزين', labelEn: 'RAM & SSD', value: '16GB LPDDR5X / 1TB Gen4 SSD' },
      { labelAr: 'الشاشة', labelEn: 'Display', value: '14.2" Liquid Retina 2.8K' },
      { labelAr: 'البطارية', labelEn: 'Battery', value: 'Up to 18 Hours + 70W Fast Charge' },
      { labelAr: 'الملحقات', labelEn: 'Included', value: 'Wireless Pro Ergonomic Mouse' }
    ],
    reviews: [
      { id: 'r4', userName: 'كريم عادل', rating: 5, date: '2026-10-02', comment: 'أفضل لابتوب استخدمته في البرمجة والمونتاج، خفيف جداً والماوس المرفق مريح للغاية.' }
    ]
  },
  {
    id: 'prod-4',
    sku: 'CM-APP-004',
    nameAr: 'ماكينة الإسبريسو والكابتشينو الأوتوماتيكية Barista Master',
    nameEn: 'Barista Master Automatic Espresso & Cappuccino Maker',
    brand: 'CasaBrew',
    category: 'appliances',
    price: 14800,
    originalPrice: 17900,
    stock: 15,
    rating: 4.7,
    reviewsCount: 118,
    featured: true,
    badgeAr: 'خصم 17%',
    badgeEn: 'Save 17%',
    image: IMG_ESPRESSO,
    colors: ['ستانلس ستيل × أسود'],
    descriptionAr: 'ماكينة قهوة أوتوماتيكية بالكامل بضغط 19 بار ومطحنة حبوب مخروطية مدمجة وخافق حليب أوتوماتيكي لتحضير الإسبريسو واللاتيه والكابتشينو بلمسة واحدة.',
    descriptionEn: '19-bar automatic bean-to-cup espresso machine with integrated conical burr grinder, automatic milk carafe, and touch panel.',
    specs: [
      { labelAr: 'ضغط المضخة', labelEn: 'Pump Pressure', value: '19 Bar Italian Pump' },
      { labelAr: 'المطحنة', labelEn: 'Grinder', value: '13-Setting Conical Steel Burr' },
      { labelAr: 'سعة خزان المياه', labelEn: 'Water Tank', value: '1.8 Liters Removable' },
      { labelAr: 'البرامج', labelEn: 'Programs', value: '6 One-Touch Coffee Drinks' }
    ],
    reviews: [
      { id: 'r5', userName: 'نهى عبد الرحمن', rating: 5, date: '2026-10-08', comment: 'القهوة بتطلع بوش كريمي تحفة زي الكافيهات بالظبط، وسهلة جداً في التنظيف.' }
    ]
  },
  {
    id: 'prod-5',
    sku: 'CM-FSH-005',
    nameAr: 'حقيبة ظهر ذكية مضادة للمياه + حذاء رياضي CloudRun',
    nameEn: 'Urban Shield Waterproof Backpack + CloudRun Sneakers',
    brand: 'Veloce',
    category: 'fashion',
    price: 3450,
    originalPrice: 4300,
    stock: 31,
    rating: 4.8,
    reviewsCount: 215,
    featured: false,
    badgeAr: 'عرض اليوم',
    badgeEn: 'Daily Deal',
    image: IMG_FASHION,
    colors: ['أسود مطفي + بيج', 'رمادي داكن + أبيض'],
    descriptionAr: 'حقيبة ظهر عصرية مبطنة تتسع للابتوب 16 بوصة ومقاومة للمياه مع منفذ USB للشحن، مرفقة بحذاء جري خفيف الوزن بنعل ممتص للصدمات.',
    descriptionEn: 'Water-resistant minimalist 16-inch laptop backpack with USB charging port bundled with ultra-light breathable running sneakers.',
    specs: [
      { labelAr: 'سعة الحقيبة', labelEn: 'Backpack Capacity', value: '24L fits up to 16" Laptop' },
      { labelAr: 'الخامة', labelEn: 'Material', value: 'Waterproof Oxford Matte PU' },
      { labelAr: 'مقاسات الحذاء', labelEn: 'Shoe Sizes', value: 'EU 40 - 45 Available' },
      { labelAr: 'النعل', labelEn: 'Midsole', value: 'CloudFoam Shock-Absorbing' }
    ],
    reviews: [
      { id: 'r6', userName: 'يوسف هاني', rating: 5, date: '2026-10-11', comment: 'الشنطة عملية جداً للشغل والجامعة والكوتشي مريح فوق الوصف.' }
    ]
  },
  {
    id: 'prod-6',
    sku: 'CM-VIP-006',
    nameAr: 'المجموعة التنفيذية الشاملة C-Mart Executive Tech Suite',
    nameEn: 'C-Mart Executive Tech Suite (Laptop + ANC Headphones + Watch)',
    brand: 'C Mart Exclusive',
    category: 'electronics',
    price: 54900,
    originalPrice: 63500,
    stock: 5,
    rating: 5.0,
    reviewsCount: 64,
    featured: true,
    badgeAr: 'باقة VIP',
    badgeEn: 'VIP Suite',
    image: HERO_IMAGE,
    colors: ['إصدار الزمرد الأسود الملكي'],
    descriptionAr: 'الباقة التنفيذية الكاملة لرجال الأعمال وصناع المحتوى: تضم لابتوب ألترا بوك، سماعة C-Pulse Pro، ساعة ذكية، وسماعات الأذن اللاسلكية في صندوق هدايا فاخر.',
    descriptionEn: 'Complete executive bundle including the Ultra-Slim Laptop, ANC Headphones, Titanium SmartWatch, and TWS Earbuds in luxury packaging.',
    specs: [
      { labelAr: 'محتويات الباقة', labelEn: 'Bundle Contents', value: '4 Flagship Devices Included' },
      { labelAr: 'الضمان الشامل', labelEn: 'VIP Warranty', value: '36 Months C-Mart Care+' },
      { labelAr: 'الشحن', labelEn: 'Delivery', value: 'Same-Day VIP Express' },
      { labelAr: 'التوفير', labelEn: 'Total Savings', value: '8,600 EGP Instant Discount' }
    ],
    reviews: [
      { id: 'r7', userName: 'م. طارق المنصور', rating: 5, date: '2026-10-12', comment: 'تغليف فخم جداً وتوصيل في نفس اليوم، الباقة متكاملة وموفرة جداً.' }
    ]
  }
];

const INITIAL_COUPONS = [
  { code: 'CMART20', discountPercent: 20, minOrderAmount: 2000, maxDiscount: 3500, isActive: true, descriptionAr: 'خصم 20% على الطلبات فوق 2000 ج.م (بحد أقصى 3500 ج.م)', descriptionEn: '20% off orders over 2,000 EGP (max 3,500 EGP)' },
  { code: 'WELCOME10', discountPercent: 10, minOrderAmount: 500, maxDiscount: 1500, isActive: true, descriptionAr: 'خصم 10% ترحيبي لجميع العملاء الجدد', descriptionEn: '10% welcome discount for new customers' },
  { code: 'VIP25', discountPercent: 25, minOrderAmount: 15000, maxDiscount: 6000, isActive: true, descriptionAr: 'خصم 25% خاص للطلبات الكبرى فوق 15,000 ج.م', descriptionEn: '25% VIP discount on orders above 15,000 EGP' }
];

const INITIAL_ORDERS = [
  {
    id: 'ord-1001',
    orderNumber: 'CM-2026-8841',
    customerName: 'أحمد محمود السيد',
    customerEmail: 'ahmed@cmart.eg',
    customerPhone: '01012345678',
    shippingAddress: {
      governorate: 'القاهرة',
      city: 'مدينة نصر',
      street: 'شارع عباس العقاد، برج النخيل، الدور الخامس',
      notes: 'الاتصال قبل الوصول بنصف ساعة'
    },
    orderItems: [
      { productId: 'prod-1', nameAr: 'سماعة الرأس اللاسلكية C-Pulse Pro عازلة للضوضاء', nameEn: 'C-Pulse Pro Wireless ANC Studio Headphones', price: 4250, qty: 1, selectedColor: 'أسود تيتانيوم' }
    ],
    paymentMethod: 'instapay',
    subtotal: 4250,
    shippingFee: 0,
    discount: 425,
    couponCode: 'WELCOME10',
    totalAmount: 3825,
    status: 'shipped',
    createdAt: '2026-10-13 14:30'
  },
  {
    id: 'ord-1002',
    orderNumber: 'CM-2026-7912',
    customerName: 'مريم حسن علي',
    customerEmail: 'mariam@cmart.eg',
    customerPhone: '01123456789',
    shippingAddress: {
      governorate: 'الجيزة',
      city: 'الشيخ زايد',
      street: 'الحي الرابع، مجاورة 2، فيلا 18',
      notes: ''
    },
    orderItems: [
      { productId: 'prod-4', nameAr: 'ماكينة الإسبريسو والكابتشينو الأوتوماتيكية Barista Master', nameEn: 'Barista Master Automatic Espresso Maker', price: 14800, qty: 1, selectedColor: 'ستانلس ستيل × أسود' }
    ],
    paymentMethod: 'card',
    subtotal: 14800,
    shippingFee: 0,
    discount: 2960,
    couponCode: 'CMART20',
    totalAmount: 11840,
    status: 'delivered',
    createdAt: '2026-10-11 19:15'
  }
];

const ANALYTICS_DATA = [
  { month: 'مايو', revenue: 185000, orders: 42 },
  { month: 'يونيو', revenue: 242000, orders: 58 },
  { month: 'يوليو', revenue: 310000, orders: 74 },
  { month: 'أغسطس', revenue: 295000, orders: 69 },
  { month: 'سبتمبر', revenue: 418000, orders: 96 },
  { month: 'أكتوبر', revenue: 512000, orders: 124 }
];

const BACKEND_FILES = {
  'server.js': `require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');
const couponRoutes = require('./routes/couponRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'C Mart E-Commerce Node.js API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/coupons', couponRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('C Mart Server running on port ' + PORT));`,

  'controllers/productController.js': `// GET /api/products — Filter, Search & Sort Products
const getProducts = async (req, res) => {
  const { category, search, sort, minPrice, maxPrice, inStock } = req.query;
  const query = {};
  if (category && category !== 'all') query.category = category;
  if (inStock === 'true') query.stock = { $gt: 0 };
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }
  if (search) {
    query.$or = [
      { nameAr: { $regex: search, $options: 'i' } },
      { nameEn: { $regex: search, $options: 'i' } },
      { brand: { $regex: search, $options: 'i' } }
    ];
  }
  const products = await Product.find(query);
  res.json({ success: true, count: products.length, data: products });
};

// POST /api/products — Admin Create Product
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, data: product });
};`,

  'controllers/orderController.js': `// POST /api/orders — Create Customer Order & Deduct Stock
const createOrder = async (req, res) => {
  const { customerName, customerEmail, customerPhone, shippingAddress, orderItems, paymentMethod, subtotal, shippingFee, discount, couponCode, totalAmount } = req.body;
  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ success: false, message: 'سلة التسوق فارغة' });
  }
  const orderNumber = 'CM-2026-' + Math.floor(1000 + Math.random() * 9000);
  const order = await Order.create({
    orderNumber,
    customerName,
    customerEmail,
    customerPhone,
    shippingAddress,
    orderItems,
    paymentMethod,
    subtotal,
    shippingFee,
    discount,
    couponCode,
    totalAmount,
    status: 'processing'
  });
  res.status(201).json({ success: true, data: order });
};`,

  'middleware/authMiddleware.js': `const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth && auth.startsWith('Bearer ')) {
    try {
      const token = auth.split(' ')[1];
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      return next();
    } catch (err) {
      return res.status(401).json({ success: false, message: 'رمز الدخول غير صالح' });
    }
  }
  return res.status(401).json({ success: false, message: 'يرجى تسجيل الدخول أولاً' });
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') return next();
  return res.status(403).json({ success: false, message: 'صلاحيات مدير النظام مطلوبة' });
};

module.exports = { protect, adminOnly };`,

  'models/Schema.js': `const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true },
  nameAr: { type: String, required: true },
  nameEn: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 4.8 },
  reviewsCount: { type: Number, default: 0 },
  featured: { type: Boolean, default: false }
}, { timestamps: true });`
};

const CATEGORIES = [
  { id: 'all', nameAr: 'جميع الأقسام', nameEn: 'All Categories' },
  { id: 'electronics', nameAr: 'إلكترونيات وصوتيات', nameEn: 'Electronics & Audio' },
  { id: 'phones', nameAr: 'هواتف وساعات ذكية', nameEn: 'Phones & Smartwatches' },
  { id: 'laptops', nameAr: 'لابتوب وكمبيوتر', nameEn: 'Laptops & PC' },
  { id: 'appliances', nameAr: 'أجهزة منزلية وقهوة', nameEn: 'Home & Coffee' },
  { id: 'fashion', nameAr: 'أزياء ومستلزمات', nameEn: 'Fashion & Lifestyle' }
];

const GOVERNORATES = [
  'القاهرة',
  'الجيزة',
  'الإسكندرية',
  'الدقهلية',
  'الشرقية',
  'الغربية',
  'القليوبية',
  'المنوفية',
  'البحيرة',
  'بورسعيد',
  'الإسماعيلية',
  'السويس',
  'أسيوط',
  'سوهاج',
  'أسوان'
];

export default function App() {
  const [lang, setLang] = useState('ar');
  const [currency, setCurrency] = useState('EGP');
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('store');
  const [toast, setToast] = useState(null);

  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [coupons, setCoupons] = useState(INITIAL_COUPONS);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [maxPriceFilter, setMaxPriceFilter] = useState(60000);
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [onlyDiscounted, setOnlyDiscounted] = useState(false);

  const [cart, setCart] = useState([
    {
      productId: 'prod-1',
      qty: 1,
      selectedColor: 'أسود تيتانيوم'
    }
  ]);
  const [wishlist, setWishlist] = useState(['prod-2']);
  const [compareList, setCompareList] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [checkoutForm, setCheckoutForm] = useState({
    customerName: 'أحمد محمود السيد',
    customerEmail: 'ahmed@cmart.eg',
    customerPhone: '01012345678',
    governorate: 'القاهرة',
    city: 'مدينة نصر',
    street: 'شارع عباس العقاد، عمارة 14',
    notes: '',
    paymentMethod: 'cod'
  });
  const [lastCreatedOrder, setLastCreatedOrder] = useState(null);

  const [activeProduct, setActiveProduct] = useState(null);
  const [detailColor, setDetailColor] = useState('');
  const [detailQty, setDetailQty] = useState(1);
  const [reviewForm, setReviewForm] = useState({ userName: '', rating: 5, comment: '' });

  const [trackInput, setTrackInput] = useState('CM-2026-8841');
  const [trackedOrder, setTrackedOrder] = useState(INITIAL_ORDERS[0]);

  const [currentUser, setCurrentUser] = useState({
    name: 'أحمد محمود (عميل VIP)',
    email: 'ahmed@cmart.eg',
    role: 'admin'
  });
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authEmail, setAuthEmail] = useState('');
  const [authName, setAuthName] = useState('');

  const [adminSubTab, setAdminSubTab] = useState('overview');
  const [newProductForm, setNewProductForm] = useState({
    nameAr: '',
    nameEn: '',
    brand: '',
    category: 'electronics',
    price: '',
    originalPrice: '',
    stock: '15',
    badgeAr: 'جديد'
  });
  const [newCouponForm, setNewCouponForm] = useState({
    code: '',
    discountPercent: 15,
    minOrderAmount: 1000,
    maxDiscount: 2000,
    descriptionAr: ''
  });

  const [apiLogs, setApiLogs] = useState([
    {
      id: 'log-1',
      timestamp: '02:45:01',
      method: 'GET',
      endpoint: '/api/products?category=all',
      status: 200,
      latency: '12ms',
      summary: 'Fetched 6 products from Node.js Express controller'
    },
    {
      id: 'log-2',
      timestamp: '02:45:04',
      method: 'GET',
      endpoint: '/api/auth/session',
      status: 200,
      latency: '8ms',
      summary: 'JWT Token verified (role: admin)'
    }
  ]);
  const [selectedBackendFile, setSelectedBackendFile] = useState('server.js');
  const [copiedCode, setCopiedCode] = useState(false);
  const [sandboxEndpoint, setSandboxEndpoint] = useState('GET /api/products');
  const [sandboxResponse, setSandboxResponse] = useState(null);

  const isRTL = lang === 'ar';

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => {
      setToast((prev) => (prev && prev.msg === msg ? null : prev));
    }, 3200);
  };

  const logApiCall = (method, endpoint, status, summary) => {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    const entry = {
      id: `log-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      timestamp: timeStr,
      method,
      endpoint,
      status,
      latency: `${Math.floor(7 + Math.random() * 18)}ms`,
      summary
    };
    setApiLogs((prev) => [entry, ...prev.slice(0, 24)]);
  };

  const formatPrice = (amountEGP) => {
    if (currency === 'USD') {
      const usd = (Number(amountEGP) / 48.5).toFixed(2);
      return `$${Number(usd).toLocaleString()}`;
    }
    return `${Number(amountEGP).toLocaleString()} ${isRTL ? 'ج.م' : 'EGP'}`;
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
        if (p.price > maxPriceFilter) return false;
        if (onlyInStock && p.stock <= 0) return false;
        if (onlyDiscounted && p.originalPrice <= p.price) return false;
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchAr = p.nameAr.toLowerCase().includes(q);
          const matchEn = p.nameEn.toLowerCase().includes(q);
          const matchBrand = p.brand.toLowerCase().includes(q);
          const matchSku = p.sku.toLowerCase().includes(q);
          if (!matchAr && !matchEn && !matchBrand && !matchSku) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return Number(b.featured) - Number(a.featured);
      });
  }, [products, selectedCategory, maxPriceFilter, onlyInStock, onlyDiscounted, searchQuery, sortBy]);

  const enrichedCart = useMemo(() => {
    return cart
      .map((item) => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) return null;
        return {
          ...item,
          product,
          lineTotal: product.price * item.qty
        };
      })
      .filter(Boolean);
  }, [cart, products]);

  const cartSubtotal = useMemo(() => {
    return enrichedCart.reduce((sum, item) => sum + item.lineTotal, 0);
  }, [enrichedCart]);

  const freeShippingThreshold = 3000;
  const shippingFee = cartSubtotal === 0 || cartSubtotal >= freeShippingThreshold ? 0 : 85;

  const discountAmount = useMemo(() => {
    if (!appliedCoupon) return 0;
    if (cartSubtotal < appliedCoupon.minOrderAmount) return 0;
    const raw = (cartSubtotal * appliedCoupon.discountPercent) / 100;
    return Math.min(Math.round(raw), appliedCoupon.maxDiscount);
  }, [appliedCoupon, cartSubtotal]);

  const cartTotal = Math.max(0, cartSubtotal + shippingFee - discountAmount);
  const totalCartItems = enrichedCart.reduce((sum, item) => sum + item.qty, 0);

  const handleAddToCart = (product, qty = 1, color = '') => {
    if (product.stock <= 0) {
      showToast(isRTL ? 'عذراً، هذا المنتج غير متوفر حالياً' : 'Out of stock', 'error');
      return;
    }
    const chosenColor = color || (product.colors && product.colors[0]) || 'قياسي';
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.productId === product.id && item.selectedColor === chosenColor
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx] = {
          ...updated[existingIdx],
          qty: Math.min(product.stock, updated[existingIdx].qty + qty)
        };
        return updated;
      }
      return [...prev, { productId: product.id, qty, selectedColor: chosenColor }];
    });
    logApiCall('POST', '/api/cart/items', 201, `Added ${qty}x ${product.sku} (${chosenColor}) to cart`);
    showToast(
      isRTL
        ? `تمت إضافة "${product.nameAr}" إلى سلة التسوق`
        : `Added "${product.nameEn}" to cart`
    );
  };

  const handleUpdateCartQty = (productId, selectedColor, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.productId === productId && item.selectedColor === selectedColor) {
            const product = products.find((p) => p.id === productId);
            const maxStock = product ? product.stock : 99;
            const nextQty = Math.min(maxStock, item.qty + delta);
            return nextQty > 0 ? { ...item, qty: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
    logApiCall('PUT', `/api/cart/items/${productId}`, 200, `Updated quantity by ${delta}`);
  };

  const handleRemoveCartItem = (productId, selectedColor) => {
    setCart((prev) =>
      prev.filter((item) => !(item.productId === productId && item.selectedColor === selectedColor))
    );
    logApiCall('DELETE', `/api/cart/items/${productId}`, 200, 'Removed item from cart');
  };

  const handleApplyCoupon = (codeToApply) => {
    const rawCode = (typeof codeToApply === 'string' ? codeToApply : couponInput).trim().toUpperCase();
    if (!rawCode) return;
    const found = coupons.find((c) => c.code.toUpperCase() === rawCode && c.isActive);
    if (!found) {
      logApiCall('POST', '/api/coupons/validate', 404, `Invalid coupon code: ${rawCode}`);
      showToast(isRTL ? 'كود الخصم غير صحيح أو منتهي الصلاحية' : 'Invalid coupon code', 'error');
      return;
    }
    if (cartSubtotal < found.minOrderAmount) {
      logApiCall('POST', '/api/coupons/validate', 400, `Order subtotal below minimum ${found.minOrderAmount}`);
      showToast(
        isRTL
          ? `الحد الأدنى لتفعيل الكوبون ${found.code} هو ${formatPrice(found.minOrderAmount)}`
          : `Minimum order for ${found.code} is ${formatPrice(found.minOrderAmount)}`,
        'error'
      );
      return;
    }
    setAppliedCoupon(found);
    setCouponInput(found.code);
    logApiCall('POST', '/api/coupons/validate', 200, `Applied coupon ${found.code} (-${found.discountPercent}%)`);
    showToast(
      isRTL
        ? `تم تفعيل كود الخصم ${found.code} بنجاح (خصم ${found.discountPercent}%)`
        : `Coupon ${found.code} applied (-${found.discountPercent}%)`
    );
  };

  const toggleWishlist = (productId) => {
    const exists = wishlist.includes(productId);
    setWishlist((prev) => (exists ? prev.filter((id) => id !== productId) : [...prev, productId]));
    logApiCall('POST', `/api/wishlist/${productId}`, 200, exists ? 'Removed from wishlist' : 'Added to wishlist');
    showToast(
      exists
        ? isRTL
          ? 'تمت الإزالة من المفضلة'
          : 'Removed from wishlist'
        : isRTL
        ? 'تمت الإضافة إلى قائمة المفضلة'
        : 'Added to wishlist'
    );
  };

  const toggleCompare = (productId) => {
    const exists = compareList.includes(productId);
    if (!exists && compareList.length >= 4) {
      showToast(isRTL ? 'يمكنك مقارنة حتى 4 منتجات كحد أقصى' : 'Compare up to 4 products max', 'error');
      return;
    }
    setCompareList((prev) => (exists ? prev.filter((id) => id !== productId) : [...prev, productId]));
    showToast(
      exists
        ? isRTL
          ? 'تمت الإزالة من المقارنة'
          : 'Removed from comparison'
        : isRTL
        ? 'تمت الإضافة لجدول المقارنة'
        : 'Added to comparison'
    );
  };

  const handleCompleteOrder = () => {
    if (!checkoutForm.customerName.trim() || !checkoutForm.customerPhone.trim() || !checkoutForm.street.trim()) {
      showToast(isRTL ? 'يرجى استكمال بيانات الاسم ورقم الهاتف والعنوان' : 'Please fill required shipping fields', 'error');
      return;
    }
    const orderNumber = `CM-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
    const newOrder = {
      id: `ord-${Date.now()}`,
      orderNumber,
      customerName: checkoutForm.customerName,
      customerEmail: checkoutForm.customerEmail,
      customerPhone: checkoutForm.customerPhone,
      shippingAddress: {
        governorate: checkoutForm.governorate,
        city: checkoutForm.city || 'المركز الرئيسي',
        street: checkoutForm.street,
        notes: checkoutForm.notes
      },
      orderItems: enrichedCart.map((item) => ({
        productId: item.productId,
        nameAr: item.product.nameAr,
        nameEn: item.product.nameEn,
        price: item.product.price,
        qty: item.qty,
        selectedColor: item.selectedColor
      })),
      paymentMethod: checkoutForm.paymentMethod,
      subtotal: cartSubtotal,
      shippingFee,
      discount: discountAmount,
      couponCode: appliedCoupon ? appliedCoupon.code : '',
      totalAmount: cartTotal,
      status: 'processing',
      createdAt: nowStr
    };

    setProducts((prev) =>
      prev.map((p) => {
        const boughtQty = enrichedCart
          .filter((i) => i.productId === p.id)
          .reduce((s, i) => s + i.qty, 0);
        return boughtQty > 0 ? { ...p, stock: Math.max(0, p.stock - boughtQty) } : p;
      })
    );

    setOrders((prev) => [newOrder, ...prev]);
    setLastCreatedOrder(newOrder);
    setTrackedOrder(newOrder);
    setTrackInput(newOrder.orderNumber);
    setCart([]);
    setAppliedCoupon(null);
    setCheckoutStep(3);
    logApiCall('POST', '/api/orders', 201, `Created Order ${orderNumber} — Total: ${cartTotal} EGP`);
    showToast(isRTL ? `تم تأكيد طلبك بنجاح! رقم الطلب: ${orderNumber}` : `Order confirmed! #${orderNumber}`);
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!activeProduct || !reviewForm.comment.trim()) return;
    const newReview = {
      id: `rev-${Date.now()}`,
      userName: reviewForm.userName.trim() || currentUser.name,
      rating: Number(reviewForm.rating),
      date: new Date().toISOString().slice(0, 10),
      comment: reviewForm.comment.trim()
    };
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== activeProduct.id) return p;
        const nextReviews = [newReview, ...(p.reviews || [])];
        const nextCount = p.reviewsCount + 1;
        const nextRating = Number(
          ((p.rating * p.reviewsCount + newReview.rating) / nextCount).toFixed(1)
        );
        const updatedProduct = {
          ...p,
          reviews: nextReviews,
          reviewsCount: nextCount,
          rating: nextRating
        };
        setActiveProduct(updatedProduct);
        return updatedProduct;
      })
    );
    setReviewForm({ userName: '', rating: 5, comment: '' });
    logApiCall('POST', `/api/products/${activeProduct.id}/reviews`, 201, `New ${newReview.rating}★ review submitted`);
    showToast(isRTL ? 'شكراً لك! تم نشر تقييمك بنجاح' : 'Review posted!');
  };

  const handleAdminCreateProduct = (e) => {
    e.preventDefault();
    if (!newProductForm.nameAr.trim() || !newProductForm.price) {
      showToast(isRTL ? 'يرجى إدخال اسم المنتج والسعر' : 'Please enter product name and price', 'error');
      return;
    }
    const priceNum = Number(newProductForm.price);
    const origNum = Number(newProductForm.originalPrice) || Math.round(priceNum * 1.15);
    const created = {
      id: `prod-${Date.now()}`,
      sku: `CM-${Math.floor(100 + Math.random() * 900)}`,
      nameAr: newProductForm.nameAr,
      nameEn: newProductForm.nameEn || newProductForm.nameAr,
      brand: newProductForm.brand || 'C Mart Pro',
      category: newProductForm.category,
      price: priceNum,
      originalPrice: origNum,
      stock: Number(newProductForm.stock) || 10,
      rating: 5.0,
      reviewsCount: 1,
      featured: true,
      badgeAr: newProductForm.badgeAr || 'جديد',
      badgeEn: 'New',
      image: IMG_HEADPHONES,
      colors: ['أسود قياسي', 'فضي'],
      descriptionAr: 'منتج أصلي بضمان C Mart الرسمي لمدة 24 شهراً مع شحن سريع لجميع المحافظات.',
      descriptionEn: 'Official C Mart product with 24-month warranty and fast nationwide shipping.',
      specs: [{ labelAr: 'الضمان', labelEn: 'Warranty', value: '24 Months' }],
      reviews: []
    };
    setProducts((prev) => [created, ...prev]);
    setNewProductForm({
      nameAr: '',
      nameEn: '',
      brand: '',
      category: 'electronics',
      price: '',
      originalPrice: '',
      stock: '15',
      badgeAr: 'جديد'
    });
    logApiCall('POST', '/api/products', 201, `Admin created product ${created.sku}`);
    showToast(isRTL ? 'تمت إضافة المنتج الجديد للمتجر بنجاح' : 'New product added to store');
  };

  const handleUpdateOrderStatus = (orderId, nextStatus) => {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id === orderId) {
          const updated = { ...o, status: nextStatus };
          if (trackedOrder && trackedOrder.id === orderId) {
            setTrackedOrder(updated);
          }
          return updated;
        }
        return o;
      })
    );
    logApiCall('PUT', `/api/orders/${orderId}/status`, 200, `Order status updated to "${nextStatus}"`);
    showToast(isRTL ? 'تم تحديث حالة الطلب بنجاح' : 'Order status updated');
  };

  const handleCreateCoupon = (e) => {
    e.preventDefault();
    if (!newCouponForm.code.trim()) return;
    const created = {
      code: newCouponForm.code.trim().toUpperCase(),
      discountPercent: Number(newCouponForm.discountPercent) || 15,
      minOrderAmount: Number(newCouponForm.minOrderAmount) || 500,
      maxDiscount: Number(newCouponForm.maxDiscount) || 2000,
      isActive: true,
      descriptionAr: newCouponForm.descriptionAr || `خصم ${newCouponForm.discountPercent}% على مشترياتك`,
      descriptionEn: `${newCouponForm.discountPercent}% discount code`
    };
    setCoupons((prev) => [created, ...prev]);
    setNewCouponForm({ code: '', discountPercent: 15, minOrderAmount: 1000, maxDiscount: 2000, descriptionAr: '' });
    logApiCall('POST', '/api/coupons', 201, `Created coupon ${created.code}`);
    showToast(isRTL ? `تم إنشاء كوبون الخصم ${created.code}` : `Coupon ${created.code} created`);
  };

  const handleCopyBackendCode = () => {
    const code = BACKEND_FILES[selectedBackendFile] || '';
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code);
      } else {
        const ta = document.createElement('textarea');
        ta.value = code;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
    } catch (err) {
      const ta = document.createElement('textarea');
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
    showToast(isRTL ? 'تم نسخ كود الباك إند إلى الحافظة' : 'Backend code copied to clipboard');
  };

  const handleRunSandboxApi = () => {
    const [method, path] = sandboxEndpoint.split(' ');
    let responsePayload = {};
    if (path === '/api/health') {
      responsePayload = {
        status: 'ok',
        service: 'C Mart Node.js + Express REST API',
        database: 'Connected (MongoDB + In-Memory Cache)',
        uptime: '99.99%',
        timestamp: new Date().toISOString()
      };
    } else if (path === '/api/products') {
      responsePayload = {
        success: true,
        count: products.length,
        data: products.map((p) => ({
          id: p.id,
          sku: p.sku,
          nameAr: p.nameAr,
          price: p.price,
          stock: p.stock,
          rating: p.rating
        }))
      };
    } else if (path === '/api/orders') {
      responsePayload = {
        success: true,
        count: orders.length,
        data: orders
      };
    } else if (path === '/api/coupons') {
      responsePayload = {
        success: true,
        count: coupons.length,
        data: coupons
      };
    } else {
      responsePayload = {
        success: true,
        user: currentUser,
        jwtToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.cmart_payload_2026.sig'
      };
    }
    setSandboxResponse(responsePayload);
    logApiCall(method, path, 200, `Executed interactive test on ${path}`);
  };

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen transition-colors duration-200 font-sans ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Top Promotional Announcement Bar */}
      <div className="bg-gradient-to-r from-emerald-700 via-teal-700 to-slate-900 text-white text-xs sm:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
            <span>
              {isRTL
                ? 'عروض الموسم في C Mart! استخدم كود CMART20 للحصول على خصم 20% + شحن مجاني للطلبات فوق 3000 ج.م'
                : 'C Mart Mega Sale! Use code CMART20 for 20% OFF + Free Shipping on orders over 3,000 EGP'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleApplyCoupon('CMART20')}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-2.5 py-0.5 rounded-full text-xs transition"
            >
              {isRTL ? 'تفعيل CMART20 تلقائياً' : 'Apply CMART20'}
            </button>
            <button
              onClick={() => setCurrency((c) => (c === 'EGP' ? 'USD' : 'EGP'))}
              className="bg-white/15 hover:bg-white/25 px-2.5 py-0.5 rounded-md text-xs font-semibold transition"
            >
              {currency === 'EGP' ? 'EGP (ج.م)' : 'USD ($)'}
            </button>
            <button
              onClick={() => setLang((l) => (l === 'ar' ? 'en' : 'ar'))}
              className="bg-white/15 hover:bg-white/25 px-2.5 py-0.5 rounded-md text-xs font-semibold flex items-center gap-1 transition"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{isRTL ? 'English' : 'العربية'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-30 border-b backdrop-blur-md ${
          darkMode
            ? 'bg-slate-900/90 border-slate-800'
            : 'bg-white/95 border-slate-200 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => setActiveTab('store')}
            className="flex items-center gap-2.5 text-start group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white font-black text-xl shadow-md shadow-emerald-600/25 group-hover:scale-105 transition">
              C
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight">C MART</span>
                <span className="text-[11px] bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold px-2 py-0.5 rounded-full">
                  {isRTL ? 'سي مارت' : 'PRO'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {isRTL ? 'متجر إلكتروني متكامل • React + Node.js' : 'Full-Stack React + Node.js Store'}
              </p>
            </div>
          </button>

          {/* Search Input */}
          <div className="flex-1 min-w-[220px] max-w-md relative">
            <Search
              className={`w-4 h-4 text-slate-400 absolute top-1/2 -translate-y-1/2 ${
                isRTL ? 'right-3.5' : 'left-3.5'
              }`}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (activeTab !== 'store') setActiveTab('store');
              }}
              placeholder={
                isRTL
                  ? 'ابحث عن منتج، ماركة، لابتوب، سماعة...'
                  : 'Search products, brands, SKU...'
              }
              className={`w-full rounded-xl py-2 text-sm border focus:outline-none focus:ring-2 focus:ring-emerald-500 transition ${
                isRTL ? 'pr-10 pl-8' : 'pl-10 pr-8'
              } ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-400'
                  : 'bg-slate-100 border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className={`absolute top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 ${
                  isRTL ? 'left-2.5' : 'right-2.5'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Primary Navigation Pills */}
          <nav className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setActiveTab('store')}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition ${
                activeTab === 'store'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : darkMode
                  ? 'text-slate-300 hover:bg-slate-800'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>{isRTL ? 'المتجر' : 'Store'}</span>
            </button>

            <button
              onClick={() => setActiveTab('track')}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition ${
                activeTab === 'track'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : darkMode
                  ? 'text-slate-300 hover:bg-slate-800'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>{isRTL ? 'تتبع الطلبات' : 'Track Order'}</span>
            </button>

            <button
              onClick={() => setActiveTab('admin')}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition ${
                activeTab === 'admin'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : darkMode
                  ? 'text-slate-300 hover:bg-slate-800'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>{isRTL ? 'لوحة الإدارة' : 'Admin'}</span>
            </button>

            <button
              onClick={() => setActiveTab('backend')}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition ${
                activeTab === 'backend'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : darkMode
                  ? 'text-slate-300 hover:bg-slate-800'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Server className="w-4 h-4" />
              <span>{isRTL ? 'الباك إند Node.js' : 'Node.js API'}</span>
              <span className="px-1.5 py-0.2 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px]">
                {apiLogs.length}
              </span>
            </button>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode((d) => !d)}
              title={isRTL ? 'تبديل المظهر' : 'Toggle Theme'}
              className={`p-2 rounded-xl border transition ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setIsCompareOpen(true)}
              title={isRTL ? 'مقارنة المنتجات' : 'Compare Products'}
              className={`relative p-2 rounded-xl border transition ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              {compareList.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {compareList.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsWishlistOpen(true)}
              title={isRTL ? 'قائمة المفضلة' : 'Wishlist'}
              className={`relative p-2 rounded-xl border transition ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Heart className="w-4 h-4 text-rose-500" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">{formatPrice(cartTotal)}</span>
              <span className="px-1.5 py-0.5 rounded-full bg-white text-emerald-800 text-xs font-extrabold">
                {totalCartItems}
              </span>
            </button>

            <button
              onClick={() => setIsAuthModalOpen(true)}
              className={`p-2 rounded-xl border flex items-center gap-1.5 text-xs font-bold transition ${
                darkMode
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <User className="w-4 h-4 text-emerald-600" />
              <span className="hidden md:inline max-w-[90px] truncate">{currentUser.name}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Toast Notification Banner */}
      {toast && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl shadow-xl border bg-slate-900 text-white border-slate-700 text-sm font-bold animate-bounce">
          {toast.type === 'error' ? (
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          )}
          <span>{toast.msg}</span>
        </div>
      )}

      {/* ==================== VIEW 1: STOREFRONT ==================== */}
      {activeTab === 'store' && (
        <main className="max-w-7xl mx-auto px-4 py-6 space-y-8">
          {/* Hero Banner */}
          <section className="relative rounded-3xl overflow-hidden bg-slate-900 text-white shadow-xl border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-5 z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                  <Flame className="w-4 h-4 text-amber-400" />
                  <span>
                    {isRTL
                      ? 'أقوى عروض الإلكترونيات والمنتجات الأصلية في مصر'
                      : 'Egypt’s #1 Destination for Authentic Tech & Lifestyle'}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight">
                  {isRTL ? (
                    <>
                      تسوق بذكاء مع <span className="text-emerald-400">سي مارت C Mart</span> — كل ما تحتاجه في مكان واحد
                    </>
                  ) : (
                    <>
                      Shop Smarter with <span className="text-emerald-400">C Mart</span> — Everything You Need in One Place
                    </>
                  )}
                </h1>
                <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                  {isRTL
                    ? 'اكتشف أحدث الهواتف الذكية، اللابتوبات الاحترافية، السماعات العازلة للضوضاء، وماكينات القهوة الأوتوماتيكية بضمان رسمي 24 شهراً ودفع آمن عبر إنستا باي أو عند الاستلام.'
                    : 'Discover flagship smartphones, ultra-slim laptops, studio ANC headphones, and automatic espresso machines with 24-month warranty and flexible payment.'}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    onClick={() => {
                      const el = document.getElementById('catalog-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm shadow-lg shadow-emerald-500/25 transition"
                  >
                    {isRTL ? 'تصفح الكتالوج والعروض' : 'Explore Catalog'}
                  </button>
                  <button
                    onClick={() => {
                      setActiveProduct(products[5]);
                      setDetailColor(products[5].colors[0]);
                      setDetailQty(1);
                    }}
                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-sm transition"
                  >
                    {isRTL ? 'استعرض باقة VIP التنفيذية' : 'View VIP Executive Suite'}
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80 text-xs sm:text-sm">
                  <div>
                    <div className="font-black text-emerald-400 text-lg">+50,000</div>
                    <div className="text-slate-400">{isRTL ? 'عميل يثق بنا' : 'Happy Customers'}</div>
                  </div>
                  <div>
                    <div className="font-black text-amber-400 text-lg">24 {isRTL ? 'شهر' : 'Mos'}</div>
                    <div className="text-slate-400">{isRTL ? 'ضمان محلي معتمد' : 'Official Warranty'}</div>
                  </div>
                  <div>
                    <div className="font-black text-sky-400 text-lg">100%</div>
                    <div className="text-slate-400">{isRTL ? 'منتجات أصلية مضمونة' : 'Authentic Products'}</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 h-full">
                <img
                  src={HERO_IMAGE}
                  alt="C Mart Flagship Collection"
                  className="w-full h-64 sm:h-80 lg:h-[420px] object-cover max-w-full"
                />
              </div>
            </div>
          </section>

          {/* Service Guarantees Row */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                icon: Truck,
                titleAr: 'توصيل سريع لكل المحافظات',
                titleEn: 'Fast Nationwide Delivery',
                descAr: 'توصيل مجاني للطلبات فوق 3000 ج.م',
                descEn: 'Free shipping over 3,000 EGP'
              },
              {
                icon: ShieldCheck,
                titleAr: 'ضمان رسمي لمدة سنتين',
                titleEn: '2-Year Official Warranty',
                descAr: 'صيانة معتمدة واستبدال فوري للعيوب',
                descEn: 'Certified service & replacement'
              },
              {
                icon: CreditCard,
                titleAr: 'طرق دفع متعددة وآمنة',
                titleEn: 'Flexible & Secure Payment',
                descAr: 'إنستا باي، بطاقات بنكية، تقسيط، أو عند الاستلام',
                descEn: 'InstaPay, Card, ValU, or COD'
              },
              {
                icon: RefreshCw,
                titleAr: 'استرجاع مجاني خلال 14 يوماً',
                titleEn: '14-Day Easy Returns',
                descAr: 'استرداد كامل المبلغ بدون تعقيدات',
                descEn: 'Hassle-free money-back guarantee'
              }
            ].map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border flex items-start gap-3 ${
                    darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200/80 shadow-sm'
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm">
                      {isRTL ? feat.titleAr : feat.titleEn}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {isRTL ? feat.descAr : feat.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </section>

          {/* Category Filter Pills & Advanced Filter Controls */}
          <section id="catalog-section" className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-black">
                  {isRTL ? 'كتالوج منتجات C Mart' : 'C Mart Product Catalog'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {isRTL
                    ? `يتم عرض ${filteredProducts.length} من أصل ${products.length} منتج`
                    : `Showing ${filteredProducts.length} of ${products.length} products`}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <label className="inline-flex items-center gap-1.5 text-xs font-semibold cursor-pointer px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>{isRTL ? 'المتوفر فقط' : 'In Stock Only'}</span>
                </label>

                <label className="inline-flex items-center gap-1.5 text-xs font-semibold cursor-pointer px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800">
                  <input
                    type="checkbox"
                    checked={onlyDiscounted}
                    onChange={(e) => setOnlyDiscounted(e.target.checked)}
                    className="rounded text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>{isRTL ? 'العروض والخصومات' : 'On Sale'}</span>
                </label>

                <div className="flex items-center gap-1.5">
                  <ArrowUpDown className="w-4 h-4 text-slate-400" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`rounded-xl px-3 py-2 text-xs font-bold border focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                      darkMode
                        ? 'bg-slate-900 border-slate-800 text-slate-100'
                        : 'bg-white border-slate-200 text-slate-800'
                    }`}
                  >
                    <option value="featured">{isRTL ? 'الترتيب: الأكثر تميزاً' : 'Sort: Featured'}</option>
                    <option value="price-asc">{isRTL ? 'السعر: من الأقل للأعلى' : 'Price: Low to High'}</option>
                    <option value="price-desc">{isRTL ? 'السعر: من الأعلى للأقل' : 'Price: High to Low'}</option>
                    <option value="rating">{isRTL ? 'الأعلى تقييماً' : 'Highest Rated'}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        logApiCall('GET', `/api/products?category=${cat.id}`, 200, `Filtered category: ${cat.id}`);
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition ${
                        isActive
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : darkMode
                          ? 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {isRTL ? cat.nameAr : cat.nameEn}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="text-slate-500 font-medium whitespace-nowrap">
                  {isRTL ? 'الحد الأقصى للسعر:' : 'Max Price:'}{' '}
                  <strong className="text-emerald-600 dark:text-emerald-400">
                    {formatPrice(maxPriceFilter)}
                  </strong>
                </span>
                <input
                  type="range"
                  min="3000"
                  max="60000"
                  step="1000"
                  value={maxPriceFilter}
                  onChange={(e) => setMaxPriceFilter(Number(e.target.value))}
                  className="w-32 sm:w-44 accent-emerald-600 cursor-pointer"
                />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div
                className={`p-12 rounded-3xl border text-center space-y-3 ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                <Package className="w-12 h-12 text-slate-400 mx-auto" />
                <h3 className="text-lg font-bold">
                  {isRTL ? 'لا توجد منتجات مطابقة لبحثك' : 'No matching products found'}
                </h3>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setMaxPriceFilter(60000);
                    setOnlyInStock(false);
                    setOnlyDiscounted(false);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                >
                  {isRTL ? 'إعادة ضبط جميع الفلاتر' : 'Reset Filters'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => {
                  const discountPct =
                    product.originalPrice > product.price
                      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                      : 0;
                  const isWished = wishlist.includes(product.id);
                  const isCompared = compareList.includes(product.id);

                  return (
                    <div
                      key={product.id}
                      className={`group rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${
                        darkMode
                          ? 'bg-slate-900 border-slate-800'
                          : 'bg-white border-slate-200/90 shadow-sm'
                      }`}
                    >
                      <div>
                        <div className="relative h-56 overflow-hidden bg-slate-950">
                          <img
                            src={product.image}
                            alt={isRTL ? product.nameAr : product.nameEn}
                            className="w-full h-full object-cover max-w-full group-hover:scale-105 transition-transform duration-500"
                          />
                          <div
                            className={`absolute top-3 ${
                              isRTL ? 'right-3' : 'left-3'
                            } flex flex-col gap-1.5`}
                          >
                            {product.badgeAr && (
                              <span className="px-2.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-extrabold shadow">
                                {isRTL ? product.badgeAr : product.badgeEn}
                              </span>
                            )}
                            {discountPct > 0 && (
                              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[11px] font-black shadow">
                                -{discountPct}%
                              </span>
                            )}
                          </div>

                          <div
                            className={`absolute top-3 ${
                              isRTL ? 'left-3' : 'right-3'
                            } flex flex-col gap-1.5`}
                          >
                            <button
                              onClick={() => toggleWishlist(product.id)}
                              className={`p-2 rounded-full backdrop-blur-md transition ${
                                isWished
                                  ? 'bg-rose-500 text-white'
                                  : 'bg-white/85 text-slate-800 hover:bg-white'
                              }`}
                              title={isRTL ? 'أضف للمفضلة' : 'Wishlist'}
                            >
                              <Heart className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => toggleCompare(product.id)}
                              className={`p-2 rounded-full backdrop-blur-md transition ${
                                isCompared
                                  ? 'bg-indigo-600 text-white'
                                  : 'bg-white/85 text-slate-800 hover:bg-white'
                              }`}
                              title={isRTL ? 'قارن المنتج' : 'Compare'}
                            >
                              <Layers className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                setActiveProduct(product);
                                setDetailColor((product.colors && product.colors[0]) || '');
                                setDetailQty(1);
                                logApiCall('GET', `/api/products/${product.id}`, 200, `Viewed product details ${product.sku}`);
                              }}
                              className="p-2 rounded-full bg-white/85 text-slate-800 hover:bg-white backdrop-blur-md transition"
                              title={isRTL ? 'معاينة سريعة' : 'Quick View'}
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div className="p-5 space-y-2.5">
                          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                            <span className="font-bold text-emerald-600 dark:text-emerald-400">
                              {product.brand}
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                              <span className="font-bold text-slate-800 dark:text-slate-200">
                                {product.rating}
                              </span>
                              <span>({product.reviewsCount})</span>
                            </div>
                          </div>

                          <h3
                            onClick={() => {
                              setActiveProduct(product);
                              setDetailColor((product.colors && product.colors[0]) || '');
                              setDetailQty(1);
                            }}
                            className="font-bold text-base leading-snug cursor-pointer hover:text-emerald-600 transition line-clamp-2"
                          >
                            {isRTL ? product.nameAr : product.nameEn}
                          </h3>

                          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                            {isRTL ? product.descriptionAr : product.descriptionEn}
                          </p>
                        </div>
                      </div>

                      <div className="px-5 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
                        <div className="flex items-baseline justify-between">
                          <div>
                            <div className="text-xl font-black text-emerald-600 dark:text-emerald-400">
                              {formatPrice(product.price)}
                            </div>
                            {product.originalPrice > product.price && (
                              <div className="text-xs text-slate-400 line-through">
                                {formatPrice(product.originalPrice)}
                              </div>
                            )}
                          </div>
                          <span
                            className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                              product.stock > 5
                                ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                : product.stock > 0
                                ? 'bg-amber-500/15 text-amber-600'
                                : 'bg-rose-500/15 text-rose-600'
                            }`}
                          >
                            {product.stock > 0
                              ? isRTL
                                ? `متوفر (${product.stock} قطعة)`
                                : `In Stock (${product.stock})`
                              : isRTL
                              ? 'نفد من المخزون'
                              : 'Out of Stock'}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleAddToCart(product, 1)}
                            disabled={product.stock <= 0}
                            className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-400 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            <span>{isRTL ? 'أضف إلى السلة' : 'Add to Cart'}</span>
                          </button>
                          <button
                            onClick={() => {
                              setActiveProduct(product);
                              setDetailColor((product.colors && product.colors[0]) || '');
                              setDetailQty(1);
                            }}
                            className={`px-3 py-2.5 rounded-xl border text-xs font-bold transition ${
                              darkMode
                                ? 'border-slate-700 hover:bg-slate-800'
                                : 'border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {isRTL ? 'التفاصيل' : 'Details'}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </main>
      )}

      {/* ==================== VIEW 2: ORDER TRACKING ==================== */}
      {activeTab === 'track' && (
        <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
          <div
            className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div>
              <h1 className="text-2xl font-black flex items-center gap-2">
                <Truck className="w-6 h-6 text-emerald-500" />
                <span>{isRTL ? 'تتبع شحنتك لحظياً في C Mart' : 'Real-Time C Mart Order Tracker'}</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {isRTL
                  ? 'أدخل رقم الطلب الخاص بك أو اختر من طلباتك المسجلة لمتابعة خط سير الشحنة'
                  : 'Enter your order number or select from your recent orders below'}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                value={trackInput}
                onChange={(e) => setTrackInput(e.target.value)}
                placeholder="CM-2026-8841"
                className={`flex-1 min-w-[200px] rounded-xl px-4 py-2.5 text-sm border focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                  darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}
              />
              <button
                onClick={() => {
                  const found = orders.find(
                    (o) => o.orderNumber.toLowerCase() === trackInput.trim().toLowerCase()
                  );
                  if (found) {
                    setTrackedOrder(found);
                    logApiCall('GET', `/api/orders/track/${found.orderNumber}`, 200, `Tracked order ${found.orderNumber}`);
                    showToast(isRTL ? 'تم تحديث بيانات الشحنة' : 'Order found');
                  } else {
                    logApiCall('GET', `/api/orders/track/${trackInput}`, 404, 'Order number not found');
                    showToast(isRTL ? 'لم يتم العثور على طلب بهذا الرقم' : 'Order not found', 'error');
                  }
                }}
                className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition"
              >
                {isRTL ? 'تتبع الآن' : 'Track Order'}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-500 font-semibold">
                {isRTL ? 'طلباتك الحالية:' : 'Your Orders:'}
              </span>
              {orders.map((ord) => (
                <button
                  key={ord.id}
                  onClick={() => {
                    setTrackInput(ord.orderNumber);
                    setTrackedOrder(ord);
                  }}
                  className={`px-3 py-1 rounded-full font-bold border transition ${
                    trackedOrder && trackedOrder.id === ord.id
                      ? 'bg-emerald-600 text-white border-emerald-600'
                      : darkMode
                      ? 'bg-slate-800 border-slate-700 text-slate-300'
                      : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {ord.orderNumber}
                </button>
              ))}
            </div>

            {trackedOrder && (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl">
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {isRTL ? 'رقم الطلب المرجعي' : 'Order Number'}
                    </div>
                    <div className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                      {trackedOrder.orderNumber}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{trackedOrder.createdAt}</div>
                  </div>
                  <div className="text-end">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {isRTL ? 'إجمالي الفاتورة' : 'Total Amount'}
                    </div>
                    <div className="text-xl font-black">{formatPrice(trackedOrder.totalAmount)}</div>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-600 text-white">
                      {trackedOrder.status === 'processing'
                        ? isRTL
                          ? 'جاري التجهيز في المستودع'
                          : 'Processing'
                        : trackedOrder.status === 'shipped'
                        ? isRTL
                          ? 'خرج للشحن مع المندوب'
                          : 'Out for Delivery'
                        : trackedOrder.status === 'delivered'
                        ? isRTL
                          ? 'تم التوصيل بنجاح'
                          : 'Delivered'
                        : isRTL
                        ? 'ملغي'
                        : 'Cancelled'}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { key: 'pending', labelAr: '1. تأكيد الطلب', labelEn: '1. Order Confirmed', active: true },
                    {
                      key: 'processing',
                      labelAr: '2. التجهيز والتغليف',
                      labelEn: '2. Packed at Warehouse',
                      active: ['processing', 'shipped', 'delivered'].includes(trackedOrder.status)
                    },
                    {
                      key: 'shipped',
                      labelAr: '3. خرج للتوصيل',
                      labelEn: '3. Out for Delivery',
                      active: ['shipped', 'delivered'].includes(trackedOrder.status)
                    },
                    {
                      key: 'delivered',
                      labelAr: '4. تم التسليم',
                      labelEn: '4. Delivered',
                      active: trackedOrder.status === 'delivered'
                    }
                  ].map((step) => (
                    <div
                      key={step.key}
                      className={`p-3.5 rounded-2xl border text-center space-y-1.5 ${
                        step.active
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-600 dark:text-emerald-400'
                          : darkMode
                          ? 'bg-slate-800/50 border-slate-800 text-slate-500'
                          : 'bg-slate-100 border-slate-200 text-slate-400'
                      }`}
                    >
                      <CheckCircle2 className="w-5 h-5 mx-auto" />
                      <div className="text-xs font-bold">{isRTL ? step.labelAr : step.labelEn}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div
                    className={`p-4 rounded-2xl border space-y-1.5 ${
                      darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                      {isRTL ? 'بيانات التوصيل والعميل' : 'Delivery Details'}
                    </div>
                    <div>
                      <strong>{isRTL ? 'العميل:' : 'Customer:'}</strong> {trackedOrder.customerName}
                    </div>
                    <div>
                      <strong>{isRTL ? 'الهاتف:' : 'Phone:'}</strong> {trackedOrder.customerPhone}
                    </div>
                    <div>
                      <strong>{isRTL ? 'العنوان:' : 'Address:'}</strong>{' '}
                      {trackedOrder.shippingAddress.governorate} - {trackedOrder.shippingAddress.city} -{' '}
                      {trackedOrder.shippingAddress.street}
                    </div>
                    <div>
                      <strong>{isRTL ? 'وسيلة الدفع:' : 'Payment:'}</strong>{' '}
                      {trackedOrder.paymentMethod.toUpperCase()}
                    </div>
                  </div>

                  <div
                    className={`p-4 rounded-2xl border space-y-2 ${
                      darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                      {isRTL ? 'المنتجات داخل الشحنة' : 'Ordered Items'}
                    </div>
                    {trackedOrder.orderItems.map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-1 border-b border-slate-200/60 dark:border-slate-700/60 last:border-0">
                        <span>
                          {item.qty}× {isRTL ? item.nameAr : item.nameEn}
                        </span>
                        <span className="font-bold">{formatPrice(item.price * item.qty)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      )}

      {/* ==================== VIEW 3: ADMIN DASHBOARD ==================== */}
      {activeTab === 'admin' && (
        <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-emerald-500" />
                <span>{isRTL ? 'لوحة تحكم إدارة C Mart' : 'C Mart Admin Control Center'}</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {isRTL
                  ? 'إدارة فورية للمنتجات، المخزون، الطلبات، الكوبونات، وتحليلات المبيعات'
                  : 'Real-time management of products, inventory, orders, coupons, and sales analytics'}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: 'overview', labelAr: 'الإحصائيات والمبيعات', labelEn: 'Analytics Overview' },
                { id: 'products', labelAr: `إدارة المنتجات (${products.length})`, labelEn: `Products (${products.length})` },
                { id: 'orders', labelAr: `الطلبات (${orders.length})`, labelEn: `Orders (${orders.length})` },
                { id: 'coupons', labelAr: `الكوبونات (${coupons.length})`, labelEn: `Coupons (${coupons.length})` }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setAdminSubTab(t.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${
                    adminSubTab === t.id
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : darkMode
                      ? 'bg-slate-900 border border-slate-800 text-slate-300'
                      : 'bg-white border border-slate-200 text-slate-700'
                  }`}
                >
                  {isRTL ? t.labelAr : t.labelEn}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="text-xs text-slate-500">{isRTL ? 'إجمالي مبيعات الشهر' : 'Monthly Revenue'}</div>
              <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                {formatPrice(512000 + orders.reduce((s, o) => s + o.totalAmount, 0))}
              </div>
              <div className="text-[11px] text-emerald-500 font-bold mt-1">+22.4% {isRTL ? 'مقارنة بالشهر الماضي' : 'vs last month'}</div>
            </div>
            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="text-xs text-slate-500">{isRTL ? 'إجمالي الطلبات المسجلة' : 'Total Orders'}</div>
              <div className="text-2xl font-black mt-1">{122 + orders.length}</div>
              <div className="text-[11px] text-sky-500 font-bold mt-1">98.4% {isRTL ? 'نسبة التسليم الناجح' : 'Fulfillment Rate'}</div>
            </div>
            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="text-xs text-slate-500">{isRTL ? 'المنتجات النشطة بالمخزن' : 'Active Products'}</div>
              <div className="text-2xl font-black mt-1">{products.length}</div>
              <div className="text-[11px] text-amber-500 font-bold mt-1">
                {products.reduce((s, p) => s + p.stock, 0)} {isRTL ? 'قطعة متوفرة بالمستودع' : 'units in stock'}
              </div>
            </div>
            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="text-xs text-slate-500">{isRTL ? 'كوبونات الخصم الفعالة' : 'Active Coupons'}</div>
              <div className="text-2xl font-black mt-1">{coupons.filter((c) => c.isActive).length}</div>
              <div className="text-[11px] text-indigo-500 font-bold mt-1">CMART20 • WELCOME10 • VIP25</div>
            </div>
          </div>

          {adminSubTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`p-6 rounded-3xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <h3 className="font-bold text-base mb-4">
                  {isRTL ? 'نمو الإيرادات الشهرية (ج.م)' : 'Monthly Revenue Growth (EGP)'}
                </h3>
                <div className="relative h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={ANALYTICS_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                      <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#10b981"
                        fill="#10b981"
                        fillOpacity={0.2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className={`p-6 rounded-3xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
                <h3 className="font-bold text-base mb-4">
                  {isRTL ? 'تطور عدد الطلبات الشهرية' : 'Monthly Orders Volume'}
                </h3>
                <div className="relative h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ANALYTICS_DATA}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.2} />
                      <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                      <YAxis stroke="#64748b" fontSize={12} />
                      <Tooltip />
                      <Bar dataKey="orders" fill="#0d9488" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {adminSubTab === 'products' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <form
                onSubmit={handleAdminCreateProduct}
                className={`lg:col-span-4 p-6 rounded-3xl border space-y-4 h-fit ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <h3 className="font-black text-base flex items-center gap-2">
                  <Plus className="w-5 h-5 text-emerald-500" />
                  <span>{isRTL ? 'إضافة منتج جديد للمتجر' : 'Add New Product'}</span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold mb-1">{isRTL ? 'اسم المنتج (عربي) *' : 'Product Name (AR) *'}</label>
                    <input
                      type="text"
                      required
                      value={newProductForm.nameAr}
                      onChange={(e) => setNewProductForm({ ...newProductForm, nameAr: e.target.value })}
                      placeholder={isRTL ? 'مثال: شاشة الألعاب الذكية 4K' : '4K Gaming Monitor'}
                      className={`w-full rounded-xl px-3 py-2 border ${
                        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1">{isRTL ? 'الماركة (Brand)' : 'Brand'}</label>
                    <input
                      type="text"
                      value={newProductForm.brand}
                      onChange={(e) => setNewProductForm({ ...newProductForm, brand: e.target.value })}
                      placeholder="SonicWave / NovaTech"
                      className={`w-full rounded-xl px-3 py-2 border ${
                        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-1">{isRTL ? 'القسم' : 'Category'}</label>
                    <select
                      value={newProductForm.category}
                      onChange={(e) => setNewProductForm({ ...newProductForm, category: e.target.value })}
                      className={`w-full rounded-xl px-3 py-2 border ${
                        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      {CATEGORIES.filter((c) => c.id !== 'all').map((c) => (
                        <option key={c.id} value={c.id}>
                          {isRTL ? c.nameAr : c.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-bold mb-1">{isRTL ? 'السعر (ج.م) *' : 'Price (EGP) *'}</label>
                      <input
                        type="number"
                        required
                        value={newProductForm.price}
                        onChange={(e) => setNewProductForm({ ...newProductForm, price: e.target.value })}
                        placeholder="3500"
                        className={`w-full rounded-xl px-3 py-2 border ${
                          darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">{isRTL ? 'الكمية بالمخزن' : 'Stock'}</label>
                      <input
                        type="number"
                        value={newProductForm.stock}
                        onChange={(e) => setNewProductForm({ ...newProductForm, stock: e.target.value })}
                        className={`w-full rounded-xl px-3 py-2 border ${
                          darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition"
                >
                  {isRTL ? 'حفظ ونشر في المتجر فوراً' : 'Publish Product'}
                </button>
              </form>

              <div
                className={`lg:col-span-8 p-6 rounded-3xl border overflow-x-auto ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <h3 className="font-black text-base mb-4">
                  {isRTL ? 'جدول المخزون والأسعار المباشر' : 'Live Product Inventory'}
                </h3>
                <table className="w-full text-xs sm:text-sm text-start border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500">
                      <th className="py-2.5 text-start">{isRTL ? 'المنتج' : 'Product'}</th>
                      <th className="py-2.5 text-start">{isRTL ? 'السعر' : 'Price'}</th>
                      <th className="py-2.5 text-start">{isRTL ? 'المخزون' : 'Stock'}</th>
                      <th className="py-2.5 text-end">{isRTL ? 'إجراءات' : 'Actions'}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr
                        key={p.id}
                        className="border-b border-slate-100 dark:border-slate-800/70 last:border-0"
                      >
                        <td className="py-3 pr-2">
                          <div className="font-bold">{isRTL ? p.nameAr : p.nameEn}</div>
                          <div className="text-[11px] text-slate-400">{p.sku} • {p.brand}</div>
                        </td>
                        <td className="py-3 font-bold text-emerald-600 dark:text-emerald-400">
                          {formatPrice(p.price)}
                        </td>
                        <td className="py-3">
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={() => {
                                setProducts((prev) =>
                                  prev.map((item) =>
                                    item.id === p.id ? { ...item, stock: Math.max(0, item.stock - 1) } : item
                                  )
                                );
                                logApiCall('PUT', `/api/products/${p.id}`, 200, `Decremented stock for ${p.sku}`);
                              }}
                              className="w-6 h-6 rounded-lg border border-slate-300 dark:border-slate-700 flex items-center justify-center"
                            >
                              -
                            </button>
                            <span className="font-bold w-7 text-center">{p.stock}</span>
                            <button
                              onClick={() => {
                                setProducts((prev) =>
                                  prev.map((item) =>
                                    item.id === p.id ? { ...item, stock: item.stock + 1 } : item
                                  )
                                );
                                logApiCall('PUT', `/api/products/${p.id}`, 200, `Incremented stock for ${p.sku}`);
                              }}
                              className="w-6 h-6 rounded-lg border border-slate-300 dark:border-slate-700 flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-3 text-end">
                          <button
                            onClick={() => {
                              setProducts((prev) => prev.filter((item) => item.id !== p.id));
                              logApiCall('DELETE', `/api/products/${p.id}`, 200, `Deleted product ${p.sku}`);
                              showToast(isRTL ? 'تم حذف المنتج' : 'Product deleted');
                            }}
                            className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-500/10 transition"
                            title={isRTL ? 'حذف' : 'Delete'}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {adminSubTab === 'orders' && (
            <div
              className={`p-6 rounded-3xl border space-y-4 ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <h3 className="font-black text-base">
                {isRTL ? 'إدارة الطلبات وتحديث حالات الشحن' : 'Customer Orders & Fulfillment'}
              </h3>
              <div className="space-y-3">
                {orders.map((ord) => (
                  <div
                    key={ord.id}
                    className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-4 ${
                      darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-black text-emerald-600 dark:text-emerald-400">
                          {ord.orderNumber}
                        </span>
                        <span className="text-xs text-slate-400">• {ord.createdAt}</span>
                      </div>
                      <div className="text-sm font-bold">
                        {ord.customerName} ({ord.customerPhone})
                      </div>
                      <div className="text-xs text-slate-500">
                        {ord.shippingAddress.governorate} - {ord.shippingAddress.city} - {ord.shippingAddress.street}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div className="text-end">
                        <div className="text-xs text-slate-400">{isRTL ? 'الإجمالي' : 'Total'}</div>
                        <div className="font-black text-base">{formatPrice(ord.totalAmount)}</div>
                      </div>

                      <select
                        value={ord.status}
                        onChange={(e) => handleUpdateOrderStatus(ord.id, e.target.value)}
                        className={`rounded-xl px-3 py-2 text-xs font-bold border ${
                          darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-200'
                        }`}
                      >
                        <option value="processing">{isRTL ? 'جاري التجهيز' : 'Processing'}</option>
                        <option value="shipped">{isRTL ? 'خرج للشحن' : 'Shipped'}</option>
                        <option value="delivered">{isRTL ? 'تم التوصيل' : 'Delivered'}</option>
                        <option value="cancelled">{isRTL ? 'ملغي' : 'Cancelled'}</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {adminSubTab === 'coupons' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <form
                onSubmit={handleCreateCoupon}
                className={`lg:col-span-4 p-6 rounded-3xl border space-y-4 h-fit ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <h3 className="font-black text-base flex items-center gap-2">
                  <Tag className="w-5 h-5 text-emerald-500" />
                  <span>{isRTL ? 'إنشاء كوبون خصم جديد' : 'Create Discount Coupon'}</span>
                </h3>
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold mb-1">{isRTL ? 'كود الكوبون *' : 'Coupon Code *'}</label>
                    <input
                      type="text"
                      required
                      value={newCouponForm.code}
                      onChange={(e) => setNewCouponForm({ ...newCouponForm, code: e.target.value.toUpperCase() })}
                      placeholder="EID30"
                      className={`w-full rounded-xl px-3 py-2 border uppercase ${
                        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-bold mb-1">{isRTL ? 'نسبة الخصم (%)' : 'Discount %'}</label>
                      <input
                        type="number"
                        min="1"
                        max="80"
                        value={newCouponForm.discountPercent}
                        onChange={(e) => setNewCouponForm({ ...newCouponForm, discountPercent: e.target.value })}
                        className={`w-full rounded-xl px-3 py-2 border ${
                          darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">{isRTL ? 'الحد الأدنى للطلب' : 'Min Order'}</label>
                      <input
                        type="number"
                        value={newCouponForm.minOrderAmount}
                        onChange={(e) => setNewCouponForm({ ...newCouponForm, minOrderAmount: e.target.value })}
                        className={`w-full rounded-xl px-3 py-2 border ${
                          darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                        }`}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition"
                >
                  {isRTL ? 'إضافة الكوبون' : 'Add Coupon'}
                </button>
              </form>

              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coupons.map((c) => (
                  <div
                    key={c.code}
                    className={`p-5 rounded-3xl border flex flex-col justify-between gap-3 ${
                      darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-black text-base">
                        {c.code}
                      </span>
                      <span className="text-sm font-black text-amber-500">-{c.discountPercent}%</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {isRTL ? c.descriptionAr : c.descriptionEn}
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                      <span>
                        {isRTL ? 'الحد الأدنى:' : 'Min:'} {formatPrice(c.minOrderAmount)}
                      </span>
                      <button
                        onClick={() => handleApplyCoupon(c.code)}
                        className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline"
                      >
                        {isRTL ? 'تطبيق في السلة الآن' : 'Apply to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      )}

      {/* ==================== VIEW 4: NODE.JS BACKEND & LIVE API INSPECTOR ==================== */}
      {activeTab === 'backend' && (
        <main className="max-w-7xl mx-auto px-4 py-6 space-y-6">
          <div>
            <h1 className="text-2xl font-black flex items-center gap-2">
              <Server className="w-6 h-6 text-emerald-500" />
              <span>
                {isRTL
                  ? 'معمارية الباك إند Node.js + Express ومراقب الـ API المباشر'
                  : 'Node.js + Express Backend Architecture & Live API Inspector'}
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {isRTL
                ? 'كل حركة تقوم بها في المتجر يتم تسجيلها هنا كطلب REST API حقيقي مع إمكانية استعراض ونسخ أكواد السيرفر كاملة'
                : 'Inspect real-time REST API traffic triggered by your store actions and browse the full Node.js backend code'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 space-y-6">
              <div
                className={`p-5 rounded-3xl border space-y-4 ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <h3 className="font-black text-sm flex items-center gap-2">
                  <Play className="w-4 h-4 text-emerald-500" />
                  <span>{isRTL ? 'مختبر طلبات الـ REST API المباشر' : 'Interactive REST API Tester'}</span>
                </h3>
                <div className="flex gap-2">
                  <select
                    value={sandboxEndpoint}
                    onChange={(e) => setSandboxEndpoint(e.target.value)}
                    className={`flex-1 rounded-xl px-3 py-2 text-xs font-mono font-bold border ${
                      darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <option value="GET /api/health">GET /api/health</option>
                    <option value="GET /api/products">GET /api/products</option>
                    <option value="GET /api/orders">GET /api/orders</option>
                    <option value="GET /api/coupons">GET /api/coupons</option>
                    <option value="POST /api/auth/login">POST /api/auth/login</option>
                  </select>
                  <button
                    onClick={handleRunSandboxApi}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition"
                  >
                    {isRTL ? 'إرسال الطلب' : 'Send'}
                  </button>
                </div>

                {sandboxResponse && (
                  <pre className="p-3 rounded-2xl bg-slate-950 text-emerald-400 text-[11px] font-mono overflow-x-auto max-h-48">
                    {JSON.stringify(sandboxResponse, null, 2)}
                  </pre>
                )}
              </div>

              <div
                className={`p-5 rounded-3xl border space-y-3 ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-sm">
                    {isRTL ? 'سجل طلبات السيرفر المباشر (Express Morgan Logs)' : 'Live Express Request Logs'}
                  </h3>
                  <button
                    onClick={() => setApiLogs([])}
                    className="text-xs text-slate-400 hover:text-rose-500"
                  >
                    {isRTL ? 'مسح السجل' : 'Clear'}
                  </button>
                </div>
                <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                  {apiLogs.map((log) => (
                    <div
                      key={log.id}
                      className="p-3 rounded-2xl bg-slate-950 text-slate-200 font-mono text-xs space-y-1 border border-slate-800"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              log.method === 'GET'
                                ? 'bg-sky-500/20 text-sky-400'
                                : log.method === 'POST'
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : log.method === 'PUT'
                                ? 'bg-amber-500/20 text-amber-400'
                                : 'bg-rose-500/20 text-rose-400'
                            }`}
                          >
                            {log.method}
                          </span>
                          <span className="text-slate-100 font-bold">{log.endpoint}</span>
                        </div>
                        <span className="text-emerald-400 text-[11px]">
                          {log.status} • {log.latency}
                        </span>
                      </div>
                      <div className="text-slate-400 text-[11px] font-sans">{log.summary}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={`lg:col-span-7 p-6 rounded-3xl border flex flex-col justify-between space-y-4 ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-5 h-5 text-emerald-500" />
                    <h3 className="font-black text-base">
                      {isRTL ? 'ملفات الباك إند (Node.js + Express + Mongoose)' : 'Backend Source Files'}
                    </h3>
                  </div>
                  <button
                    onClick={handleCopyBackendCode}
                    className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedCode ? (isRTL ? 'تم النسخ!' : 'Copied!') : isRTL ? 'نسخ الكود' : 'Copy Code'}</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {Object.keys(BACKEND_FILES).map((fileName) => (
                    <button
                      key={fileName}
                      onClick={() => setSelectedBackendFile(fileName)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition ${
                        selectedBackendFile === fileName
                          ? 'bg-slate-950 text-emerald-400 border border-emerald-500/40'
                          : darkMode
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {fileName}
                    </button>
                  ))}
                </div>

                <pre
                  dir="ltr"
                  className="p-4 rounded-2xl bg-slate-950 text-slate-100 font-mono text-xs overflow-x-auto leading-relaxed max-h-[460px]"
                >
                  {BACKEND_FILES[selectedBackendFile]}
                </pre>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* ==================== MODAL 1: PRODUCT QUICK-VIEW & REVIEWS ==================== */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div
            className={`max-w-4xl w-full rounded-3xl border overflow-hidden my-8 ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'
            }`}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                  {activeProduct.brand}
                </span>
                <span className="text-xs text-slate-400">{activeProduct.sku}</span>
              </div>
              <button
                onClick={() => setActiveProduct(null)}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[80vh] overflow-y-auto">
              <div className="space-y-4">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.nameAr}
                  className="w-full h-72 object-cover max-w-full rounded-2xl bg-slate-950"
                />

                {activeProduct.specs && activeProduct.specs.length > 0 && (
                  <div
                    className={`p-4 rounded-2xl border space-y-2 ${
                      darkMode ? 'bg-slate-800/40 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <h4 className="font-bold text-xs text-emerald-600 dark:text-emerald-400">
                      {isRTL ? 'المواصفات الفنية' : 'Technical Specifications'}
                    </h4>
                    {activeProduct.specs.map((sp, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs py-1 border-b border-slate-200/60 dark:border-slate-700/60 last:border-0"
                      >
                        <span className="text-slate-500">{isRTL ? sp.labelAr : sp.labelEn}</span>
                        <span className="font-bold">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-black leading-snug">
                  {isRTL ? activeProduct.nameAr : activeProduct.nameEn}
                </h2>

                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {activeProduct.rating}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    ({activeProduct.reviewsCount} {isRTL ? 'تقييم موثق' : 'verified reviews'})
                  </span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    {formatPrice(activeProduct.price)}
                  </span>
                  {activeProduct.originalPrice > activeProduct.price && (
                    <span className="text-sm text-slate-400 line-through">
                      {formatPrice(activeProduct.originalPrice)}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {isRTL ? activeProduct.descriptionAr : activeProduct.descriptionEn}
                </p>

                {activeProduct.colors && activeProduct.colors.length > 0 && (
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold">
                      {isRTL ? 'اللون / الإصدار المتاح:' : 'Select Color / Edition:'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {activeProduct.colors.map((c) => (
                        <button
                          key={c}
                          onClick={() => setDetailColor(c)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition ${
                            detailColor === c
                              ? 'border-emerald-600 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                              : darkMode
                              ? 'border-slate-700 bg-slate-800'
                              : 'border-slate-200 bg-slate-100'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-xl">
                    <button
                      onClick={() => setDetailQty((q) => Math.max(1, q - 1))}
                      className="px-3 py-2 font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 py-2 font-bold text-sm">{detailQty}</span>
                    <button
                      onClick={() => setDetailQty((q) => Math.min(activeProduct.stock, q + 1))}
                      className="px-3 py-2 font-bold"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      handleAddToCart(activeProduct, detailQty, detailColor);
                      setActiveProduct(null);
                    }}
                    className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg transition"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{isRTL ? 'إضافة للسلة الآن' : 'Add to Cart Now'}</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="font-bold text-sm">
                    {isRTL ? 'آراء وتقييمات العملاء' : 'Customer Reviews'}
                  </h4>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {(activeProduct.reviews || []).map((rev) => (
                      <div
                        key={rev.id}
                        className={`p-3 rounded-xl border text-xs space-y-1 ${
                          darkMode ? 'bg-slate-800/60 border-slate-700' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold">{rev.userName}</span>
                          <span className="text-amber-500 font-bold">{'★'.repeat(rev.rating)}</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300">{rev.comment}</p>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={handleAddReview} className="space-y-2 pt-2">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={reviewForm.userName}
                        onChange={(e) => setReviewForm({ ...reviewForm, userName: e.target.value })}
                        placeholder={isRTL ? 'اسمك (اختياري)' : 'Your name'}
                        className={`flex-1 rounded-xl px-3 py-1.5 text-xs border ${
                          darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                        }`}
                      />
                      <select
                        value={reviewForm.rating}
                        onChange={(e) => setReviewForm({ ...reviewForm, rating: Number(e.target.value) })}
                        className={`rounded-xl px-2 py-1.5 text-xs font-bold border ${
                          darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <option value={5}>5 ★</option>
                        <option value={4}>4 ★</option>
                        <option value={3}>3 ★</option>
                      </select>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        required
                        value={reviewForm.comment}
                        onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                        placeholder={isRTL ? 'اكتب تجربتك مع المنتج...' : 'Write your review...'}
                        className={`flex-1 rounded-xl px-3 py-1.5 text-xs border ${
                          darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                        }`}
                      />
                      <button
                        type="submit"
                        className="px-4 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                      >
                        {isRTL ? 'نشر' : 'Post'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================== MODAL 2: SHOPPING CART DRAWER ==================== */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex justify-end">
          <div
            className={`w-full max-w-md h-full flex flex-col justify-between p-6 overflow-y-auto ${
              darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-emerald-500" />
                  <h3 className="font-black text-lg">
                    {isRTL ? 'سلة التسوق' : 'Shopping Cart'} ({totalCartItems})
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs space-y-1.5">
                {cartSubtotal >= freeShippingThreshold ? (
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>
                      {isRTL
                        ? 'مبروك! طلبك مؤهل للشحن المجاني السريع'
                        : 'Congrats! Your order qualifies for FREE Shipping'}
                    </span>
                  </div>
                ) : (
                  <div>
                    {isRTL
                      ? `أضف منتجات بقيمة ${formatPrice(freeShippingThreshold - cartSubtotal)} للحصول على شحن مجاني!`
                      : `Add ${formatPrice(freeShippingThreshold - cartSubtotal)} more for FREE shipping!`}
                  </div>
                )}
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 transition-all"
                    style={{ width: `${Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>

              {enrichedCart.length === 0 ? (
                <div className="py-16 text-center space-y-3">
                  <ShoppingBag className="w-12 h-12 text-slate-400 mx-auto" />
                  <p className="text-sm font-bold text-slate-500">
                    {isRTL ? 'سلة التسوق فارغة حالياً' : 'Your cart is empty'}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {enrichedCart.map((item) => (
                    <div
                      key={`${item.productId}-${item.selectedColor}`}
                      className={`p-3 rounded-2xl border flex gap-3 items-center ${
                        darkMode ? 'bg-slate-800/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.nameAr}
                        className="w-16 h-16 rounded-xl object-cover max-w-full shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-xs sm:text-sm truncate">
                          {isRTL ? item.product.nameAr : item.product.nameEn}
                        </div>
                        <div className="text-[11px] text-slate-400">{item.selectedColor}</div>
                        <div className="font-black text-emerald-600 dark:text-emerald-400 text-xs mt-0.5">
                          {formatPrice(item.lineTotal)}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5">
                        <button
                          onClick={() => handleRemoveCartItem(item.productId, item.selectedColor)}
                          className="text-rose-500 hover:text-rose-600 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <div className="flex items-center border border-slate-300 dark:border-slate-700 rounded-lg text-xs">
                          <button
                            onClick={() => handleUpdateCartQty(item.productId, item.selectedColor, -1)}
                            className="px-2 py-0.5 font-bold"
                          >
                            -
                          </button>
                          <span className="px-2 py-0.5 font-bold">{item.qty}</span>
                          <button
                            onClick={() => handleUpdateCartQty(item.productId, item.selectedColor, 1)}
                            className="px-2 py-0.5 font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {enrichedCart.length > 0 && (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                    placeholder={isRTL ? 'كود الخصم (مثال: CMART20)' : 'Promo code (CMART20)'}
                    className={`flex-1 rounded-xl px-3 py-2 text-xs font-bold border uppercase ${
                      darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                  <button
                    onClick={() => handleApplyCoupon()}
                    className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-emerald-600 text-white text-xs font-bold"
                  >
                    {isRTL ? 'تطبيق' : 'Apply'}
                  </button>
                </div>

                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex justify-between text-slate-500">
                    <span>{isRTL ? 'المجموع الفرعي' : 'Subtotal'}</span>
                    <span>{formatPrice(cartSubtotal)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>{isRTL ? 'مصاريف الشحن' : 'Shipping'}</span>
                    <span>{shippingFee === 0 ? (isRTL ? 'مجاني' : 'FREE') : formatPrice(shippingFee)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                      <span>
                        {isRTL ? 'خصم الكوبون' : 'Discount'} ({appliedCoupon?.code})
                      </span>
                      <span>-{formatPrice(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-black pt-2 border-t border-slate-200 dark:border-slate-800">
                    <span>{isRTL ? 'الإجمالي النهائي' : 'Total'}</span>
                    <span className="text-emerald-600 dark:text-emerald-400">{formatPrice(cartTotal)}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setCheckoutStep(1);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm shadow-lg shadow-emerald-600/25 transition"
                >
                  {isRTL ? 'إتمام الشراء والدفع الآمن' : 'Proceed to Checkout'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================== MODAL 3: MULTI-STEP CHECKOUT ==================== */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div
            className={`max-w-2xl w-full rounded-3xl border p-6 sm:p-8 space-y-6 my-8 ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <h3 className="font-black text-xl">
                {checkoutStep === 3
                  ? isRTL
                    ? 'تم تأكيد طلبك بنجاح!'
                    : 'Order Confirmed!'
                  : isRTL
                  ? 'إتمام الطلب والدفع — C Mart'
                  : 'C Mart Secure Checkout'}
              </h3>
              <button
                onClick={() => setIsCheckoutOpen(false)}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {checkoutStep === 1 && (
              <div className="space-y-4">
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {isRTL ? 'الخطوة 1 من 2: بيانات الشحن والتوصيل' : 'Step 1 of 2: Shipping Address'}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div>
                    <label className="block font-bold mb-1">{isRTL ? 'الاسم بالكامل *' : 'Full Name *'}</label>
                    <input
                      type="text"
                      value={checkoutForm.customerName}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, customerName: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2.5 border ${
                        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">{isRTL ? 'رقم الموبايل *' : 'Phone Number *'}</label>
                    <input
                      type="text"
                      value={checkoutForm.customerPhone}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, customerPhone: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2.5 border ${
                        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">{isRTL ? 'المحافظة *' : 'Governorate *'}</label>
                    <select
                      value={checkoutForm.governorate}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, governorate: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2.5 border ${
                        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      {GOVERNORATES.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold mb-1">{isRTL ? 'المدينة / الحي *' : 'City / District *'}</label>
                    <input
                      type="text"
                      value={checkoutForm.city}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2.5 border ${
                        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block font-bold mb-1">{isRTL ? 'العنوان التفصيلي *' : 'Street Address *'}</label>
                    <input
                      type="text"
                      value={checkoutForm.street}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, street: e.target.value })}
                      className={`w-full rounded-xl px-3.5 py-2.5 border ${
                        darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => setCheckoutStep(2)}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm"
                  >
                    {isRTL ? 'متابعة لاختيار طريقة الدفع' : 'Continue to Payment'}
                  </button>
                </div>
              </div>
            )}

            {checkoutStep === 2 && (
              <div className="space-y-4">
                <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {isRTL ? 'الخطوة 2 من 2: اختر وسيلة الدفع المفضلة' : 'Step 2 of 2: Payment Method'}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: 'cod', labelAr: 'الدفع عند الاستلام (Cash on Delivery)', descAr: 'ادفع نقداً للمندوب عند استلام ومعاينة الطلب' },
                    { id: 'instapay', labelAr: 'إنستا باي / فودافون كاش (InstaPay)', descAr: 'تحويل لحظي بدون رسوم إضافية' },
                    { id: 'card', labelAr: 'بطاقة بنكية (Visa / MasterCard)', descAr: 'دفع إلكتروني مشفر 3D Secure' },
                    { id: 'valu', labelAr: 'تقسيط مريح عبر ValU / بنوك', descAr: 'تقسيط حتى 24 شهراً بدون مقدم' }
                  ].map((pm) => (
                    <button
                      key={pm.id}
                      type="button"
                      onClick={() => setCheckoutForm({ ...checkoutForm, paymentMethod: pm.id })}
                      className={`p-4 rounded-2xl border text-start transition ${
                        checkoutForm.paymentMethod === pm.id
                          ? 'border-emerald-600 bg-emerald-500/10'
                          : darkMode
                          ? 'border-slate-800 bg-slate-800/40'
                          : 'border-slate-200 bg-slate-50'
                      }`}
                    >
                      <div className="font-bold text-xs sm:text-sm">{pm.labelAr}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{pm.descAr}</div>
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/60 flex items-center justify-between">
                  <span className="font-bold text-sm">{isRTL ? 'المبلغ الإجمالي المطلوب:' : 'Total Due:'}</span>
                  <span className="font-black text-xl text-emerald-600 dark:text-emerald-400">
                    {formatPrice(cartTotal)}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setCheckoutStep(1)}
                    className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold"
                  >
                    {isRTL ? 'الرجوع للعنوان' : 'Back'}
                  </button>
                  <button
                    onClick={handleCompleteOrder}
                    className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm shadow-lg"
                  >
                    {isRTL ? 'تأكيد وإرسال الطلب الآن' : 'Place Order Now'}
                  </button>
                </div>
              </div>
            )}

            {checkoutStep === 3 && lastCreatedOrder && (
              <div className="text-center space-y-4 py-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-black">
                  {isRTL ? 'شكراً لثقتك في C Mart!' : 'Thank You for Shopping at C Mart!'}
                </h4>
                <p className="text-sm text-slate-500">
                  {isRTL
                    ? `تم تسجيل طلبك رقم ${lastCreatedOrder.orderNumber} بنجاح وجاري تجهيزه للشحن.`
                    : `Your order #${lastCreatedOrder.orderNumber} has been placed and is being prepared.`}
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setIsCheckoutOpen(false);
                      setActiveTab('track');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm"
                  >
                    {isRTL ? 'تتبع حالة الطلب الآن' : 'Track Order Status'}
                  </button>
                  <button
                    onClick={() => setIsCheckoutOpen(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 font-bold text-xs sm:text-sm"
                  >
                    {isRTL ? 'مواصلة التسوق' : 'Continue Shopping'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================== MODAL 4: WISHLIST DRAWER ==================== */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex justify-end">
          <div
            className={`w-full max-w-md h-full p-6 overflow-y-auto space-y-4 ${
              darkMode ? 'bg-slate-900 text-slate-100' : 'bg-white text-slate-900'
            }`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-black text-lg flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500" />
                <span>{isRTL ? 'قائمة المفضلة' : 'My Wishlist'} ({wishlist.length})</span>
              </h3>
              <button onClick={() => setIsWishlistOpen(false)} className="p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            {wishlist.length === 0 ? (
              <p className="text-sm text-slate-500 py-12 text-center">
                {isRTL ? 'لا توجد منتجات في المفضلة بعد' : 'No items in wishlist yet'}
              </p>
            ) : (
              <div className="space-y-3">
                {products
                  .filter((p) => wishlist.includes(p.id))
                  .map((p) => (
                    <div
                      key={p.id}
                      className={`p-3 rounded-2xl border flex items-center gap-3 ${
                        darkMode ? 'bg-slate-800/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <img src={p.image} alt={p.nameAr} className="w-16 h-16 rounded-xl object-cover max-w-full" />
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-xs truncate">{isRTL ? p.nameAr : p.nameEn}</div>
                        <div className="font-black text-emerald-600 text-xs mt-1">{formatPrice(p.price)}</div>
                      </div>
                      <button
                        onClick={() => {
                          handleAddToCart(p, 1);
                          setIsWishlistOpen(false);
                        }}
                        className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                      >
                        {isRTL ? 'أضف للسلة' : 'Add'}
                      </button>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================== MODAL 5: PRODUCT COMPARISON ==================== */}
      {isCompareOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div
            className={`max-w-4xl w-full rounded-3xl border p-6 space-y-4 ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="font-black text-lg flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-500" />
                <span>{isRTL ? 'جدول مقارنة المنتجات' : 'Product Comparison'}</span>
              </h3>
              <button onClick={() => setIsCompareOpen(false)} className="p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            {compareList.length === 0 ? (
              <p className="text-sm text-slate-500 py-10 text-center">
                {isRTL
                  ? 'اضغط على أيقونة المقارنة أعلى أي منتج لإضافته هنا (حتى 4 منتجات)'
                  : 'Click the compare icon on any product card to compare side by side'}
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {products
                  .filter((p) => compareList.includes(p.id))
                  .map((p) => (
                    <div
                      key={p.id}
                      className={`p-4 rounded-2xl border space-y-2 ${
                        darkMode ? 'bg-slate-800/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <img src={p.image} alt={p.nameAr} className="w-full h-32 object-cover max-w-full rounded-xl" />
                      <div className="font-bold text-xs line-clamp-2">{isRTL ? p.nameAr : p.nameEn}</div>
                      <div className="text-emerald-600 font-black text-sm">{formatPrice(p.price)}</div>
                      <div className="text-xs text-slate-500">
                        {p.brand} • ★ {p.rating}
                      </div>
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => handleAddToCart(p, 1)}
                          className="flex-1 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold"
                        >
                          {isRTL ? 'للسلة' : 'Buy'}
                        </button>
                        <button
                          onClick={() => toggleCompare(p.id)}
                          className="px-2 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==================== MODAL 6: USER ACCOUNT / AUTH SWITCHER ==================== */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className={`max-w-md w-full rounded-3xl border p-6 space-y-4 ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <h3 className="font-black text-lg">
                {isRTL ? 'حساب المستخدم والصلاحيات (JWT Auth)' : 'User Account & JWT Session'}
              </h3>
              <button onClick={() => setIsAuthModalOpen(false)} className="p-2 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs space-y-1">
              <div className="font-bold text-emerald-600 dark:text-emerald-400">
                {isRTL ? 'المستخدم المسجل حالياً:' : 'Active User:'}
              </div>
              <div className="font-black text-sm">{currentUser.name}</div>
              <div className="text-slate-500">{currentUser.email} • Role: {currentUser.role.toUpperCase()}</div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold">
                {isRTL ? 'تسجيل دخول سريع أو تبديل الحساب:' : 'Quick Account Switch:'}
              </label>
              <input
                type="text"
                value={authName}
                onChange={(e) => setAuthName(e.target.value)}
                placeholder={isRTL ? 'الاسم (مثال: محمد علي)' : 'Your Name'}
                className={`w-full rounded-xl px-3 py-2 text-xs border ${
                  darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}
              />
              <input
                type="email"
                value={authEmail}
                onChange={(e) => setAuthEmail(e.target.value)}
                placeholder="user@cmart.eg"
                className={`w-full rounded-xl px-3 py-2 text-xs border ${
                  darkMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'
                }`}
              />
              <button
                onClick={() => {
                  if (!authName.trim()) return;
                  const nextUser = {
                    name: authName.trim(),
                    email: authEmail.trim() || 'customer@cmart.eg',
                    role: 'admin'
                  };
                  setCurrentUser(nextUser);
                  logApiCall('POST', '/api/auth/login', 200, `Authenticated ${nextUser.email} via JWT`);
                  setIsAuthModalOpen(false);
                  showToast(isRTL ? `مرحباً بك في C Mart يا ${nextUser.name}!` : `Welcome, ${nextUser.name}!`);
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs"
              >
                {isRTL ? 'تحديث جلسة الدخول (JWT Login)' : 'Sign In / Switch User'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        className={`mt-12 border-t py-8 px-4 text-xs ${
          darkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-500'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white font-black flex items-center justify-center">
              C
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200">
              C Mart (سي مارت) — Full-Stack E-Commerce (React + Node.js/Express)
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setActiveTab('store')} className="hover:text-emerald-500">
              {isRTL ? 'الرئيسية والكتالوج' : 'Storefront'}
            </button>
            <button onClick={() => setActiveTab('track')} className="hover:text-emerald-500">
              {isRTL ? 'تتبع الشحنات' : 'Order Tracking'}
            </button>
            <button onClick={() => setActiveTab('admin')} className="hover:text-emerald-500">
              {isRTL ? 'لوحة الإدارة' : 'Admin Dashboard'}
            </button>
            <button onClick={() => setActiveTab('backend')} className="hover:text-emerald-500">
              {isRTL ? 'أكواد الباك إند Node.js' : 'Node.js Backend'}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
