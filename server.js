import dotenv from "dotenv";
dotenv.config();

//creating express app
import express from "express";
const app = express();

//route imports
import { common } from "./routes/Route.js";
import { Admin } from "./routes/Admin/Route.js";
import { Intern } from "./routes/Intern/Route.js";
import { Recruiter } from "./routes/Recruiter/Route.js";

//middleware
import bloatRouter from "./utils/security/bloat.js";
import { limiter } from "./utils/security/ratelimit.js";

app.use(bloatRouter);
app.use(limiter);
app.set("trust proxy");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes

app.use("/api", common);
app.use("/api/recruiter", Recruiter);
app.use("/api/intern", Intern);
app.use("/api/admin", Admin);


//listen on port PORT
const PORT = process.env.PORT || 1500;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
