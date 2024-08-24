import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import {dbConnect} from './utils/db.js'

dotenv.config();
const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))

app.use(bodyParser.json()); 
app.use(cookieParser())

app.use('/api',authRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});

dbConnect()

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
