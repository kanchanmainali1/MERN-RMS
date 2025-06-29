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
import orderRoutes from './routes/orderRoutes.js';
import billRoutes from './routes/billRoutes.js';
import inventoryRoutes from './routes/inventoryRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';


app.use('/api/users', userRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/bills', billRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/inventory', inventoryRoutes);


// DB + Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => console.error(err));
