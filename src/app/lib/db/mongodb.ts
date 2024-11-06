import mongoose from "mongoose"


if (!process.env.MONGODB_URI) {
    throw new Error('Please add your MongoDB URI to .env file. make sure that this is correct URI')
}

export const connectDB = async() => {
    const URI : string =  process.env.MONGODB_URI as string;
    try{
        await mongoose.connect(URI);
        console.log('mongo db connect seccsessfully');

    }catch(error){
        console.error('Error connecting to MongoDB:', error);
        throw error
    }
}