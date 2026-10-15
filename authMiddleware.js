const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'cmart_secret_2026');
      req.user = decoded;
      return next();
    } catch (error) {
      return res.status(401).json({ success: false, message: 'غير مصرح، رمز الدخول غير صالح (Invalid token)' });
    }
  }
  return res.status(401).json({ success: false, message: 'غير مصرح، يرجى تسجيل الدخول (No token provided)' });
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next();
  }
  return res.status(403).json({ success: false, message: 'صلاحيات مدير النظام مطلوبة (Admin access required)' });
};

module.exports = { protect, adminOnly };
