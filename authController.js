const jwt = require('jsonwebtoken');

const usersStore = [
  { id: 'u-admin', name: 'مدير متجر C Mart', email: 'admin@cmart.eg', phone: '01000000001', role: 'admin' },
  { id: 'u-cust', name: 'أحمد محمود', email: 'ahmed@cmart.eg', phone: '01012345678', role: 'customer' }
];

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET || 'cmart_secret_2026',
    { expiresIn: '30d' }
  );
};

const loginUser = (req, res) => {
  const { email } = req.body;
  const user = usersStore.find((u) => u.email.toLowerCase() === (email || '').toLowerCase()) || {
    id: `u-${Date.now()}`,
    name: email ? email.split('@')[0] : 'عميل C Mart',
    email: email || 'guest@cmart.eg',
    role: email && email.includes('admin') ? 'admin' : 'customer'
  };
  res.json({
    success: true,
    data: {
      ...user,
      token: generateToken(user)
    }
  });
};

const registerUser = (req, res) => {
  const { name, email, phone } = req.body;
  const newUser = {
    id: `u-${Date.now()}`,
    name: name || 'عميل جديد',
    email: email || 'user@cmart.eg',
    phone: phone || '',
    role: 'customer'
  };
  usersStore.push(newUser);
  res.status(201).json({
    success: true,
    data: {
      ...newUser,
      token: generateToken(newUser)
    }
  });
};

module.exports = { loginUser, registerUser };
