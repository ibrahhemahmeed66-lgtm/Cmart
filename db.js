const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.log('⚠️ No MONGO_URI provided. Running with in-memory data store.');
      return false;
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`⚠️ MongoDB connection failed (${error.message}). Falling back to in-memory store.`);
    return false;
  }
};

module.exports = connectDB;
