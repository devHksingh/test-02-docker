import express, { Request, Response, NextFunction } from 'express'
import userRouter from './users/userRoute'


const app = express()
const port = process.env.PORT || 3301

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.status(201).json({
        message: 'Server is healthy and running'
    })
})

// routes declaration
app.use('/api/v1/users', userRouter)


app.listen(port, () => { console.log(`Sever is running at Port ${port}`) })

// export default app