import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
import userRoutes from './routes/userRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
app.use('/api/users', userRoutes);
app.use('/api/menu', menuRoutes);


// DB + Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error(err));
