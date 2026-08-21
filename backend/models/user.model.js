const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [5, "Name must contain at least 5 characters"],
      maxlength: [50, "Name cannot exceed 50 characters"]
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      maxlength: [100, "Email cannot exceed 100 characters"]
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
      trim: true,
      maxlength: [10, "Number cannot exceed 10 characters"],
minlength: [10, "Number must contain at least 10 characters"],
    },

    passwordHash: {
      type: String,
      required: true,
      select: false
    },

    role: {
      type: String,
      enum: ["CUSTOMER", "SELLER", "ADMIN", "DELIVERY_PARTNER"],
      default: "CUSTOMER",
      immutable: false
    },

    avatar: {
      type: String,
      default: null
    },

    isEmailVerified: {
      type: Boolean,
      default: false
    },

    isPhoneVerified: {
      type: Boolean,
      default: false
    },

    isActive: {
      type: Boolean,
      default: true
    },

    lastLoginAt: {
      type: Date,
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);