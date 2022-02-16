import dotenv from "dotenv"
dotenv.config()

//creating express app
import express from "express";
const app = express();

//route imports
import {Recruiter} from "./routes/Recruiter/Route.js";

//middleware
import bloatRouter from "./utils/security/bloat.js";
app.use(bloatRouter)

import {limiter} from "./utils/security/ratelimit.js";
app.use(limiter)
app.set('trust proxy')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




//routes

app.use("/api/recruiter", Recruiter);


//listen on port PORT
const PORT = process.env.PORT || 1500;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
