import { User } from "../models/user.model";
const bcrypt = require ("bcrypt");


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