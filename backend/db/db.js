import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

function connect() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Successfully connected to MongoDB");
        })
        .catch((error) => {
            console.error("Error connecting to MongoDB", error.message);
        });
}

export default connect;