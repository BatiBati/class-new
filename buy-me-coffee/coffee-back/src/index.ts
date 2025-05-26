import express from "express";
import { config } from "dotenv";
import cors from "cors";
const app = express();
const port = 3001;

config();

app.use(express.json()).use(cors());

app.get("/", (req, res) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
