const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
      index: true
    },

    shopName: {
      type: String,
      required: [true, "Shop name is required"],
      trim: true,
      minlength: [5, "Shop name must contain at least 5 characters"],
      maxlength: [100, "Shop name cannot exceed 100 characters"]
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true
    },

    description: {
      type: String,
      trim: true,
      maxlength: [1000, "Description cannot exceed 1000 characters"]
    },

    logo: {
      type: String,
      default: null
    },

    phone: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      trim: true,
      lowercase: true
    },

    businessAddress: {
      addressLine1: {
        type: String,
        required: true,
        trim: true
      },

      addressLine2: {
        type: String,
        trim: true,
        default: ""
      },

      landmark: {
        type: String,
        trim: true,
        default: ""
      },

      village: {
        type: String,
        trim: true
      },

      city: {
        type: String,
        required: true,
        trim: true
      },

      district: {
        type: String,
        required: true,
        trim: true
      },

      state: {
        type: String,
        required: true,
        trim: true
      },

      pincode: {
        type: String,
        required: true,
        trim: true
      },

      latitude: {
        type: Number,
        default: null
      },

      longitude: {
        type: Number,
        default: null
      }
    },

    verificationStatus: {
      type: String,
      enum: ["PENDING", "VERIFIED", "REJECTED"],
      default: "PENDING",
      index: true
    },

    status: {
      type: String,
      enum: ["ACTIVE", "SUSPENDED", "CLOSED"],
      default: "ACTIVE",
      index: true
    },

    commissionRate: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0
    },

    totalReviews: {
      type: Number,
      min: 0,
      default: 0
    },

    totalOrders: {
      type: Number,
      min: 0,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Seller", sellerSchema);