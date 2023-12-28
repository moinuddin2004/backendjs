import mongoose from "mongoose"
const subTodoSchema=new mongoose.Schema({
  content:{
    type:String,
    required:true
  },
  completed:{
    type:Boolean,
    default:false
  }
},{timestamps:true})
export const subtodo=mongoose.model("subtodo",subTodoSchema)