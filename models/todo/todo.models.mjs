import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({

  title:{
    type:String,
    required:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  subTodos:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"subtodo"
    }
  ]
}, { timestamps: true });

export const todo = mongoose.model('todo', todoSchema);
