import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
export default async function connectToDatabase() {
 try {
    const uri = process.env.CONNECTION_STRING as string;
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
 }
 catch (error) {
    console.error('Error connecting to MongoDB:', error);
 }
 
}
