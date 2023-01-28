const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const app = express();
app.use(express.json());
app.use(cors());

//routes
const useRoutes = require("./routes/anfrage");
app.use("/", useRoutes);
//fs.readdirSync("./routes").map((r) => app.use("./", require("./routes/" + r)));

//database
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error Connecting to mongodb", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
