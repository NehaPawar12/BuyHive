import userModel from '../models/userModel.js'
import { comparePassword,hashPassword} from './../helpers/authHelper.js'
import JWT from 'jsonwebtoken'

export const registerController = async(req, res) => {
    try {
        const{name, email, password, phone, address, question} = req.body
        //validation
        if(!name){
            return res.send({message: 'Name is Required'})
        }
        if(!email){
            return res.send({message: 'Email is Required'})
        }
        if(!password){
            return res.send({message: 'Password is Required'})
        }
        if(!phone){
            return res.send({message: 'Phone no. is Required'})
        }
        if(!address){
            return res.send({message: 'Address is Required'})
        }
        if(!question){
            return res.send({message: 'Answer is Required'})
        }
        //Check user
        const existingUser = await userModel.findOne({email})
        //existing user
        if(existingUser){
            return res.status(200).send({
                success:false,
                message : 'Already Registered please Login',
            })
        }

        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({name,email,phone,address,password:hashedPassword, question}).save()

        res.status(201).send({
            success:true,
            message:'User Registered Successfully',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Error in registration',
            error,
        })
    }
}

//POST LOGIN
export const loginController = async (req,res) => {
    try {
        const {email,password} = req.body
        //validation

        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid Username or Password'
            })
        }
        //check user
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            })
        }
        const match = await comparePassword(password,user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
            })
        }

        //token
        const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'

        })
        res.status(200).send({
            success:true,
            message:'login successfully',
            user:{
                _id : user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token,
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }
}

//forgotPasswordController
export const forgotPasswordController = async (req,res) => {
    try {
        const {email,question, newPassword} = req.body
        if(!email){
           return res.status(400).send({message: 'Email is required'})
        }
        if(!question){
           return res.status(400).send({message: 'Question is required'})
        }
        if(!newPassword){
           return res.status(400).send({message: 'New Password is required'})
        }
        //check
        const user = await userModel.findOne({email,question})
        //validation
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Wrong Email or Answer'
            })
        }
        const hashed = await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id,{password:hashed})
        res.status(200).send({
            success:true,
            message:'Password Reset Successfully'
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Something went wrong',
            error
        })
    }
};

//export default {registerController};
//test controller
export const testController = (req,res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
}