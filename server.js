import dotenv from "dotenv"
dotenv.config()

//creating express app
import express from "express";
const app = express();

//route imports
import routes from "./routes.js";

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//listen on port PORT
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  routes(app);
});
