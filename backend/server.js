import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';

// App config 
const app = express();
const port = process.env.PORT || 4000;
connectDB()

// Middlewares
app.use(cors());
app.use(express.json());

// Api endpoints

app.get('/', (req, res) => {
    res.send('API Working');
})

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
})

//2g4K9cCPDfaH9Er
//2g4K9cCPDfaH9Er