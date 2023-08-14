const express = require("express");
const cors = require('cors');

const dotenv = require("dotenv");
const connectDB = require("./Config/db");
const { errorHandler, notFound } = require("./Middlewares/errorHandler");

const userRoutes = require("./Routes/userRoutes");

const app = express();

dotenv.config();

// connection to DB
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.use("/api/user", userRoutes);
app.use(errorHandler);
app.use(notFound);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server has started on ${PORT}`));
