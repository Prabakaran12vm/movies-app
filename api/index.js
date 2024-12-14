//Packages
import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';

// Files
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

// configuration
dotenv.config()

const app = express()

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const PORT = process.env.PORT || 3000

// Routes
app.use("/api/v1/users", userRoutes)
// app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))

app.listen(PORT, () => {
    console.info(`Server is up and listening on port ${PORT}`);
    connectDB();
});