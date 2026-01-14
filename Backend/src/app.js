// src/app.js
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
const app = express(); 

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('CMS Backend Running');
});


app.use('/api/auth', authRoutes);


export default app;
