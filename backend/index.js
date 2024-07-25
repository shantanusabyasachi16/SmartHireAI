const express = require ('express');
const cookieparser = require ('cookie-parser')
const cors = require ('cors');
const dotenv = require('dotenv');
const connectDB = require('./utils/db');
dotenv.config({});
const app = express();



//middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());

const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;






app.listen(PORT ,()=>{
    connectDB();
console.log(`server running on port ${PORT}`);
})