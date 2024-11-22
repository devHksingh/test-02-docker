import express,{Request,Response,NextFunction} from 'express'


const app = express()
const port = process.env.PORT || 3301

app.use(express.json())

app.get('/',(req:Request,res:Response)=>{
    res.status(201).json({
        message:'Server is healthy and running'
    })
})


app.listen(port,()=>{console.log(`Sever is running at Port ${port}`)})

// export default app