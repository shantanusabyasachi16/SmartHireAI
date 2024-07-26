import express from('express');
import cookieparser from "cookie-parser";
import cors from ('cors');
import dotenv from('dotenv');
import connectDB from('./utils/db.js');
import userRoute from('./routes/user.routes.js');
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


//api=

//user route
app.use("/api/v1/user",userRoute )



app.listen(PORT ,()=>{
    connectDB();
console.log(`server running on port ${PORT}`);
})