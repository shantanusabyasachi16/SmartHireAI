import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//register
// Corrected code for registration
export const register = async (req, res) => {
    try {
        const { fullname, email, phonenumber, password, role } = req.body;
        if (!fullname || !email || !phonenumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists with this email",
                success: false
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            phonenumber,
            password: hashedPassword,
            role,
            profile: {}
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server error", success: false });
    }
};


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
const token = await jwt.sign (tokenData, process.env. SECRET_KEY,{expiresIn :'1d'});


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
export const updateProfile = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, bio, skills } = req.body;
        
        const file = req.file;
        // cloudinary 
      


        let skillsArray;
        if(skills){
            skillsArray = skills.split(",");
        }
        const userId = req.id; // middleware authentication
        let user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            })
        }
        // updating data
        if(fullname) user.fullname = fullname
        if(email) user.email = email
        if(phoneNumber)  user.phoneNumber = phoneNumber
        if(bio) user.profile.bio = bio
        if(skills) user.profile.skills = skillsArray
      
        // resume comes later here...
       

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
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