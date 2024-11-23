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

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, name } = req.body
    if (!password || !email) {
        res.status(400).json({
            message: 'All fields are required!!'
        })
    }

    try {
        // const user = await userModel.findOne({
        //     email
        // })
        const user = await userModel.findOneAndUpdate(
            { $or: [{ name }, { email }] },
            {
                $set: {
                    isLoggin: true
                },
            },
            { new: true },

        )
        if (user) {
            if (user.password === password) {
                user.isLoggin = true
                res.status(200).json({ message: `you are login successfully with email id is ${user.email} and id is ${user.id}` })
            }
        }
    } catch (error) {
        res.status(400).json({
            message: 'All fields are required!!'
        })
    }
}

const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.params.userId
    try {
        const user = await userModel.findByIdAndUpdate(
            userId,
            {
                $set: {
                    isLoggin: false
                },
            },
            {
                new: true
            }
        ).select("-password")
        if (user) {
            res.status(201).json({ user })
        }
    } catch (error) {
        res.status(500).json({ message: "Error while logout user" })
    }
}

export { createUser, loginUser, logoutUser }