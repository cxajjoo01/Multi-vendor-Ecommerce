import mongoose from "mongoose"

const schema = new mongoose.Schema({
   name:{
    type:String,
    required:[true,"Name is required."]
   },
   email:{
    type:String,
    required:[true,"Email is required."]
   },
   password:{
    type:String,
    required:[true,"Password is required."]
   },
   role:{
    type:String,
    default:"admin"
   },
   image:{
    type:String,
    required:true
   }
})

const admins = mongoose.model("admins",schema)
export default admins;