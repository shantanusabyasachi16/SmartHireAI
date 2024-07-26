import { User } from "../models/user.model";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//register

export const register = async (req,res)=>{
    try {
        const {fullname ,email,phonenumber,password,role}=req.body
        if(!fullname || !email || !phonenumber || !password || !role ){
            return res.status(400).json ({
                message:"something is missing",
                success:false
            });
        }
        const user= await User.findOne({email});
        if (user) {
            return res.status(400).json({
                message:"user already exist with this email",
                success:false
            })
            
        }
        const hashedPassword= await bcrypt.hash(password,10);
        await user.create({
            fullname,
            email,
            phonenumber,
            password:hashedPassword,
            role,
            profile:{

            }
        });
        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });
    } catch (error) {
        console.log(error);
    }

}

//for login 

export const login = async (req,res) =>{
    try {
        const { email,password,role}=req.body;
        if(!email || !password ||!role){
        return res.status(400).json({
            message: "something is missing",
            success: false,
        })
    };
      let user = await User.findOne({email});
       if (!user) {
        return res.status(400).json({
            message:"Incorrect Email or password",
            success: false,
        })
       }
       const passwordmatch = await bcrypt.compare(password, user.password);//compare the password
       if (!passwordmatch) {
        return res.status(400).json({
            message:"Incorrect Email or password",
            success: false,
        })
        
       };
       //check the role (student or recruiter)
if (role !== user.role) {
    return res.status(400).json({
        message:"Account doesn't exist with current role. ",
        success: false,
    })
}
//token

const tokenData ={
    userId:user._id
}
const token = await jwt.sign (tokenData, process.env. SECRET_KEY,{expires :'1d'});


user = {
    _id: user._id,
    fullname: user.fullname,
    email: user.email,
    phonenumber: user.phonenumber,
    role: user.role,
    profile: user.profile
}

//store the token in cookies
 return res.status(200).cookie("token", token,{ maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict'}).json({
    message:`Welcome back ${user.fullname}`,
    success: true,
 })

    } catch (error) {
        console.log(error);
    }
}

//logout

export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully.",
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}

//update profile

export const updateProfile = async(req,res)=>{
    try {
        const { fullname, email, phonenumber, bio, skills } = req.body;

      const  file = req.file;

        if(!fullname || !email || !phonenumber || !bio || !skills ){
            return res.status(400).json ({
                message:"something is missing",
                success:false
            });
        };

        //cloudinary will be added

        const skillsArray = skills.split(",")
        const userId = req.id//middleware
        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({
                message:"User not found",
                success:false,
            })
            
        }

        //updating data

        user.fullname = fullname,
        user.email = email,
        user.phonenumber = phonenumber,
        user.profile.bio = bio
        user.profile.skills= skillsArray

        //resume will added
        
    await user.save();

    user = {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        phonenumber: user.phonenumber,
        role: user.role,
        profile: user.profile
    }
    return res.status(200).json({
        message:"Profile updated successfully.",
        user,
        success:true
    })

    } catch (error) {
        console.log(error);
    }
}