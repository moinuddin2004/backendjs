import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'product',
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    orderItem: {
      type: [orderItemSchema],
    },
    status: {
      type: String,
      enum: ['pending', 'dileverd', 'shipping'],
      defualt: 'pending',
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const order = mongoose.model('order', orderSchema);
