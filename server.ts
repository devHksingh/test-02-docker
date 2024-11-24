import app from "./src/app";
import connectDB from "./src/db";

const port = process.env.PORT || 3000

const startServer = async () => {
    try {
        await connectDB()
        app.listen(port, () => { console.log(`Sever is running at Port ${port}`) })
    } catch (error) {
        console.log("MongoDb connection failed!!!!! ")
    }

}

startServer()