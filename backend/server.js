const express = require("express");
const usersRouter = require("./router/routerUsers")
const animeRouter = require("./router/routerAnime");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL);
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.text());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/users", usersRouter);
app.use("/api/anime", animeRouter);

app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));
