import mongoose from "mongoose";
import { config } from "../config/config";

const connectDB = async () => {
    try {

        mongoose.connection.on('connected', () => {
            console.log("connected to database successfully");

        })

        mongoose.connection.on("error", (err) => {
            console.log('Error in connecting to database', err);

        })

        const connectionInstance = await mongoose.connect(`${config.databaseUrl}/${config.dbName}`)
        
        // console.log(connectionInstance);
        
    } catch (error) {
        console.log('MONGODB connection FAILED!!', error);
        process.exit(1)
    }
}

export default connectDB