const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
   },
   phonenumber:{
    type: Number,
    required: true,
   },
   password:{
    type: String,
    required:true,
   },
   role:{
    type:String,
    enum:['student','recruiter'],
    required: true,
   },
   profile:{
    bio:{type:String},
    skills:[{type:String}],
    resume:{type:String}, // URL to resume file
    resumeOriginalName:{type:String}, //resume name
    company:{type:mongoose.Schema.Types.ObjectId, ref:'Company'}, 

    profilePhoto:{
        type:String,
        default:""
    }
},

},{timestamps:true});

export const user = mongoose.model('user',userSchema);
