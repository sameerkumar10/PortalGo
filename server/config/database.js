import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://samweb10:samweb10@cluster0.kvwn3.mongodb.net/razor');
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};