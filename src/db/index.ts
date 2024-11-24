import mongoose from "mongoose";

const connectDB = async () => {
    try {

        mongoose.connection.on('connected', () => {
            console.log("connected to database successfully");

        })

        mongoose.connection.on("error", (err) => {
            console.log('Error in connecting to database', err);

        })

        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
    } catch (error) {
        console.log('MONGODB connection FAILED!!', error);
        process.exit(1)
    }
}

export default connectDB