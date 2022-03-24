import dotenv from "dotenv";
dotenv.config();

//creating express app
import express from "express";
//route imports
import { common } from "./routes/Route.js";
import { Admin } from "./routes/Admin/Route.js";
import { Intern } from "./routes/Intern/Route.js";
import { Recruiter } from "./routes/Recruiter/Route.js";

//middleware
import bloatRouter from "./utils/security/bloat.js";
import { limiter } from "./utils/security/ratelimit.js";
import { authorization } from "./middleware/checkif_authorized.js";

const app = express();

app.use(bloatRouter);
app.use(limiter);
app.set("trust proxy");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes

app.use("/api", common);
app.use("/api/recruiter", authorization, Recruiter);
app.use("/api/intern", authorization, Intern);
app.use("/api/admin", authorization, Admin);

app.get("*", function (req, res) {
  res.status(404).json({ err: "Route Not Found" });
});

export default app;
