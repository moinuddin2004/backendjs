import mongoose from "mongoose"
const doctorSchema=new mongoose.Schema({
  name:{
    type:String,
    rquired:true
  },
  salary:{
    type:Number,
    rquired:true
  },
  qualification:{
    type:String,
    rquired:true
  },
  experince:{
    type:Number,
    rquired:true,
    defualt:0
  },
  workinHospital:[
    {
    type:mongoose.Schema.Types.ObjectId,
    ref:"hospital"
  }
]
},{timestamps:true})
export const doctor=mongoose.model("doctor",doctorSchema)