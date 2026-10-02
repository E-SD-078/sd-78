import mongoose from 'mongoose';
const mongoUri = process.env.MONGO_URI;

try {
  if (!mongoUri) {
    throw new Error('MONGO_URI is required');
  }
  await mongoose.connect(mongoUri, { dbName: 'routingDemo' });
  console.log('Mongodb connected!');
} catch (error) {
  console.log('mongodb connection error', error);
  process.exit(1);
}
