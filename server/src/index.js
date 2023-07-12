import express from "express"
import cors from "cors" //rules for api
import mongoose from "mongoose"

const app= express();

app.use(express.json());
app.use(cors());

app.listen(3001,()=> console.log("SERVER STARTED!"));