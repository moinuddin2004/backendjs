import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
    },
    description: {
      type: String,
      required: true,
    },
    productImage:String
  },
  { timestamps: true }
);
export const product = mongoose.model('product', productSchema);
