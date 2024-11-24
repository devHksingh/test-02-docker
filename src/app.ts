import express, { Request, Response, NextFunction } from 'express'
import userRouter from './users/userRoute'
// import userRouter from './users/userRoute'


const app = express()


app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.status(201).json({
        message: 'Server is healthy and running'
    })
})

// routes declaration
app.use('/api/v1/users', userRouter)




export default app