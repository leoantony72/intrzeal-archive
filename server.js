import dotenv from "dotenv"
dotenv.config()
import cors from "cors"

//creating express app
import express from "express";
const app = express();

//route imports
import {Recruiter} from "./routes/Recruiter/Route.js";

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

//routes

app.use("/api/recruiter", Recruiter);


//listen on port PORT
const PORT = process.env.PORT || 1500;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
