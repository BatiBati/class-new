import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { authRouter } from "./routes/auth.route";
import { profileRouter } from "./routes/profile.route";
const app = express();
const port = 3001;

config();

app.use(express.json()).use(cors());

app.get("/", (req, res) => {
  res.send("Home");
});

app.use("/auth", authRouter).use("/profile", profileRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
