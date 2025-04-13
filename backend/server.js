import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config';
{/*import connectDB from './config/mongodb.js';*/}

// App config 
const app = express();
const port = process.env.PORT || 4000;

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


mongoose.connect("mongodb+srv://Hirusha:2g4K9cCPDfaH9Er@cluster0.6muwv4m.mongodb.net/cloth first")
.then(() => {
    app.listen(port);
})
.catch((error) => {
    console.log(error);
})



//2g4K9cCPDfaH9Er
//2g4K9cCPDfaH9Er