import { Request, Response, NextFunction } from "express";
import userModel from "./userModel";


const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body

    if (!name || !password || !email) {
        res.status(400).json({
            message: 'All fields are required!!'
        })
    }

    // DB Call for check if user already exist

    try {
        const user = await userModel.findOne({ email: email })
        if (user) {
            res.status(401).json({ message: "User already exits with this email" })
        }
    } catch (error) {
        res.status(500).json({ message: "Error while getting user" })
    }

    // create user 

    try {
        const user = await userModel.create({
            email,
            name,
            password,
            isLoggin: true
        })
        if (user) {
            res.status(200).json({ message: `User is created successfully with ID ${user.id} and email ${user.email}` })
        }
    } catch (error) {
        res.status(500).json({ message: "Error while creatting user" })
    }
}

export {createUser}