import mongoose from 'mongoose';

export const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL,);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error.message);
    }
};
