const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Muaaz:48967@cluster0.w82sxvx.mongodb.net/FOODIESMERN?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected");

    const foodItems = await mongoose.connection.db.collection("food-items").find({}).toArray();
    const foodCategories = await mongoose.connection.db.collection("food_Category").find({}).toArray();

    global.food_items = foodItems;
    global.foodCategory = foodCategories;

    console.log("✅ Data fetched successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
};

module.exports = mongoDB;
