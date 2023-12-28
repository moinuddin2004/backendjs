import mongoose from 'mongoose';
const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      rquired: true,
    },
    diagnostedWith: {
      type: String,
      rquired: true,
    },
    address: {
      type: String,
      rquired: true,
    },
    age: {
      type: Number,
      rquired: true,
    },
    bloodGroup: {
      type: String,
      rquired: true,
    },
    gender: {
      type: String,
      enum: ['M', 'F'],
      rquired: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'hospital',
    },
  },
  { timestamps: true }
);
export const patient = mongoose.model('patient', patientSchema);
