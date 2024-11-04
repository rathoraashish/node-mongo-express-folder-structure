import express from 'express';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

export default app;
