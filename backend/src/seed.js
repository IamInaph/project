import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";
import { DB_NAME } from "./constants.js";

dotenv.config();

const products = [
  {
    name: "Esprit Ruffle Shirt",
    price: 16.64,
    category: "women",
    image: "/images/product-01.jpg",
    images: ["/images/product-01.jpg", "/images/product-02.jpg", "/images/product-03.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#6c7ae0", "#333", "#fa6bff"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 4,
    reviews: 12,
    stock: 50,
    isNew: false,
    isSale: false
  },
  {
    name: "Herschel Supply",
    price: 35.31,
    category: "men",
    image: "/images/product-02.jpg",
    images: ["/images/product-02.jpg", "/images/product-01.jpg", "/images/product-03.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#6c7ae0", "#333", "#00ad5f"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 5,
    reviews: 8,
    stock: 35,
    isNew: true,
    isSale: false
  },
  {
    name: "Only Check Trouser",
    price: 25.50,
    originalPrice: 32.00,
    category: "women",
    image: "/images/product-03.jpg",
    images: ["/images/product-03.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#6c7ae0", "#333", "#fa6bff", "#00ad5f"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 4,
    reviews: 15,
    stock: 42,
    isNew: false,
    isSale: true
  },
  {
    name: "Classic Trench Coat",
    price: 75.00,
    category: "women",
    image: "/images/product-04.jpg",
    images: ["/images/product-04.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#333", "#b2b2b2"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 5,
    reviews: 22,
    stock: 28,
    isNew: false,
    isSale: false
  },
  {
    name: "Front Pocket Jumper",
    price: 34.75,
    category: "women",
    image: "/images/product-05.jpg",
    images: ["/images/product-05.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#6c7ae0", "#fa6bff"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 4,
    reviews: 9,
    stock: 55,
    isNew: true,
    isSale: false
  },
  {
    name: "Vintage Inspired Classic",
    price: 93.20,
    category: "watches",
    image: "/images/product-06.jpg",
    images: ["/images/product-06.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: [],
    colors: ["#333", "#b2b2b2", "#c99e67"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 5,
    reviews: 31,
    stock: 15,
    isNew: false,
    isSale: false
  },
  {
    name: "Shirt In Stretch Cotton",
    price: 52.66,
    category: "men",
    image: "/images/product-07.jpg",
    images: ["/images/product-07.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#6c7ae0", "#333"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 4,
    reviews: 18,
    stock: 40,
    isNew: false,
    isSale: false
  },
  {
    name: "Pieces Metallic Printed",
    price: 18.96,
    category: "women",
    image: "/images/product-08.jpg",
    images: ["/images/product-08.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: ["S", "M", "L"],
    colors: ["#6c7ae0", "#fa6bff", "#333"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 3,
    reviews: 7,
    stock: 60,
    isNew: false,
    isSale: true,
    originalPrice: 24.00
  },
  {
    name: "Converse All Star Hi Plimsolls",
    price: 75.00,
    category: "shoes",
    image: "/images/product-09.jpg",
    images: ["/images/product-09.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: ["38", "39", "40", "41", "42"],
    colors: ["#333", "#fff", "#fa4251"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 5,
    reviews: 45,
    stock: 25,
    isNew: true,
    isSale: false
  },
  {
    name: "Femme T-Shirt In Stripe",
    price: 25.85,
    category: "women",
    image: "/images/product-10.jpg",
    images: ["/images/product-10.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#6c7ae0", "#333", "#fa6bff"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 4,
    reviews: 11,
    stock: 38,
    isNew: false,
    isSale: false
  },
  {
    name: "Herschel Supply Co Classic",
    price: 63.16,
    category: "bag",
    image: "/images/product-11.jpg",
    images: ["/images/product-11.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: [],
    colors: ["#333", "#6c7ae0", "#c99e67"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 5,
    reviews: 27,
    stock: 20,
    isNew: false,
    isSale: false
  },
  {
    name: "Herschel Supply Co Retreat",
    price: 52.00,
    originalPrice: 65.00,
    category: "bag",
    image: "/images/product-12.jpg",
    images: ["/images/product-12.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: [],
    colors: ["#333", "#b2b2b2"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 4,
    reviews: 19,
    stock: 18,
    isNew: false,
    isSale: true
  },
  {
    name: "Nike Air Force 1",
    price: 110.00,
    category: "shoes",
    image: "/images/product-13.jpg",
    images: ["/images/product-13.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: ["38", "39", "40", "41", "42", "43"],
    colors: ["#fff", "#333"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 5,
    reviews: 58,
    stock: 30,
    isNew: true,
    isSale: false
  },
  {
    name: "Premium Leather Watch",
    price: 125.00,
    category: "watches",
    image: "/images/product-14.jpg",
    images: ["/images/product-14.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: [],
    colors: ["#c99e67", "#333"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 5,
    reviews: 34,
    stock: 12,
    isNew: false,
    isSale: false
  },
  {
    name: "Slim Fit Chinos",
    price: 45.00,
    category: "men",
    image: "/images/product-15.jpg",
    images: ["/images/product-15.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: ["30", "32", "34", "36"],
    colors: ["#c99e67", "#333", "#4272d7"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 4,
    reviews: 23,
    stock: 45,
    isNew: false,
    isSale: false
  },
  {
    name: "Leather Crossbody Bag",
    price: 89.00,
    category: "bag",
    image: "/images/product-16.jpg",
    images: ["/images/product-16.jpg", "/images/product-01.jpg", "/images/product-02.jpg"],
    sizes: [],
    colors: ["#333", "#c99e67", "#fa6bff"],
    description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    rating: 4,
    reviews: 16,
    stock: 22,
    isNew: true,
    isSale: false
  }
];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log("Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("Cleared existing products");

    // Insert new products
    const createdProducts = await Product.insertMany(products);
    console.log(`Inserted ${createdProducts.length} products`);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
