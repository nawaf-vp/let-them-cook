import express from "express"
import cors from "cors" //rules for api
import mongoose from "mongoose"
import{userRouter} from './routes/users.js'
import{recipesRouter} from './routes/recipes.js'

const app= express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter); 

mongoose.connect(
    "mongodb+srv://nawafvpdev:MERNpassword9745@recipez.ip1aqya.mongodb.net/recipez?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }

    );

app.listen(3001,()=> console.log("SERVER STARTED!"));//api start and the port