const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://unprooby:testunprooby2244@cluster0.jmbhoqf.mongodb.net/netflix?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connected");
  });

app.use("/api/user", userRoutes);
app.listen(5000, console.log("SERVER STARTED "));
