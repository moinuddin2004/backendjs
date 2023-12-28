import mongoose from 'mongoose';
const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      rquired: true,
    },
    address: {
      type: String,
      rquired: true,
    },
    contact: {
      type: Number,
      rquired: true,
    },
    spectializeIn: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
export const hospital = mongoose.model('hospital', hospitalSchema);
