const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
app.use(cors());
app.use(express.json());
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
connectDB();
