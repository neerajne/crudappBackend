const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    origin: "https://crud-appfrontend-9876.vercel.app", // Corrected by removing the trailing slash
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

const taskRouter = require("./routes/taskRoutes");
const connectDB = require("./model/dbConnection.js"); // No destructuring here

connectDB();

app.use("/task", taskRouter);

app.listen(process.env.PORT, () => {
  console.log("App is listening to port ", process.env.PORT);
});
