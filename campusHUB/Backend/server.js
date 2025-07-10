const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
app.use(cors());
app.use(express.json());
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
connectDB();
