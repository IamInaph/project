import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import { asyncHandler } from "../utils/helpers.js";
import { ApiError } from "../middlewares/errorHandler.js";

// @desc    Get cart
// @route   GET /api/cart
// @access  Public
export const getCart = asyncHandler(async (req, res) => {
  const sessionId = req.headers["x-session-id"];
  const userId = req.user?._id;

  let cart;

  if (userId) {
    cart = await Cart.findOne({ user: userId }).populate("items.product");
  } else if (sessionId) {
    cart = await Cart.findOne({ sessionId }).populate("items.product");
  }

  if (!cart) {
    cart = { items: [] };
  }

  res.json({
    success: true,
    data: cart
  });
});

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Public
export const addToCart = asyncHandler(async (req, res) => {
  const { productId, quantity = 1, size = "", color = "" } = req.body;
  const sessionId = req.headers["x-session-id"];
  const userId = req.user?._id;

  // Verify product exists
  const product = await Product.findById(productId);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }

  let cart;

  if (userId) {
    cart = await Cart.findOne({ user: userId });
  } else if (sessionId) {
    cart = await Cart.findOne({ sessionId });
  }

  if (!cart) {
    cart = new Cart({
      user: userId,
      sessionId: userId ? undefined : sessionId,
      items: []
    });
  }

  // Check if item already exists in cart
  const existingItemIndex = cart.items.findIndex(
    (item) =>
      item.product.toString() === productId &&
      item.size === size &&
      item.color === color
  );

  if (existingItemIndex >= 0) {
    cart.items[existingItemIndex].quantity += quantity;
  } else {
    cart.items.push({
      product: productId,
      quantity,
      size,
      color
    });
  }

  await cart.save();
  await cart.populate("items.product");

  res.status(201).json({
    success: true,
    data: cart
  });
});

// @desc    Update cart item quantity
// @route   PUT /api/cart/:itemId
// @access  Public
export const updateCartItem = asyncHandler(async (req, res) => {
  const { quantity } = req.body;
  const { itemId } = req.params;
  const sessionId = req.headers["x-session-id"];
  const userId = req.user?._id;

  let cart;

  if (userId) {
    cart = await Cart.findOne({ user: userId });
  } else if (sessionId) {
    cart = await Cart.findOne({ sessionId });
  }

  if (!cart) {
    throw new ApiError(404, "Cart not found");
  }

  const itemIndex = cart.items.findIndex(
    (item) => item._id.toString() === itemId
  );

  if (itemIndex < 0) {
    throw new ApiError(404, "Item not found in cart");
  }

  if (quantity <= 0) {
    cart.items.splice(itemIndex, 1);
  } else {
    cart.items[itemIndex].quantity = quantity;
  }

  await cart.save();
  await cart.populate("items.product");

  res.json({
    success: true,
    data: cart
  });
});

// @desc    Remove item from cart
// @route   DELETE /api/cart/:itemId
// @access  Public
export const removeFromCart = asyncHandler(async (req, res) => {
  const { itemId } = req.params;
  const sessionId = req.headers["x-session-id"];
  const userId = req.user?._id;

  let cart;

  if (userId) {
    cart = await Cart.findOne({ user: userId });
  } else if (sessionId) {
    cart = await Cart.findOne({ sessionId });
  }

  if (!cart) {
    throw new ApiError(404, "Cart not found");
  }

  cart.items = cart.items.filter((item) => item._id.toString() !== itemId);

  await cart.save();
  await cart.populate("items.product");

  res.json({
    success: true,
    data: cart
  });
});

// @desc    Clear cart
// @route   DELETE /api/cart
// @access  Public
export const clearCart = asyncHandler(async (req, res) => {
  const sessionId = req.headers["x-session-id"];
  const userId = req.user?._id;

  let cart;

  if (userId) {
    cart = await Cart.findOne({ user: userId });
  } else if (sessionId) {
    cart = await Cart.findOne({ sessionId });
  }

  if (cart) {
    cart.items = [];
    await cart.save();
  }

  res.json({
    success: true,
    data: { items: [] }
  });
});
