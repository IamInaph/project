import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    originalPrice: {
      type: Number,
      min: 0
    },
    description: {
      type: String,
      default: ""
    },
    category: {
      type: String,
      required: true,
      enum: ["women", "men", "bag", "shoes", "watches"]
    },
    image: {
      type: String,
      required: true
    },
    images: [{
      type: String
    }],
    sizes: [{
      type: String
    }],
    colors: [{
      type: String
    }],
    stock: {
      type: Number,
      default: 0,
      min: 0
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    reviews: {
      type: Number,
      default: 0
    },
    isNew: {
      type: Boolean,
      default: false
    },
    isSale: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
