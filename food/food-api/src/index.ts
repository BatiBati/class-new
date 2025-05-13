import express from "express";

import { connectToDataBase } from "./database/connect-todb";

import { foodRouter } from "./routers/food.route";
import { categoryRouter } from "./routers/category.route";
import { foodOrder } from "./routers/foodOrder.route";
import { userRouter } from "./routers/user.route";
import cors from "cors";
import { authRouter } from "./routers/auth.route";
import { config } from "dotenv";

config();

connectToDataBase();

const app = express();

const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app
  .use("/food", foodRouter)
  .use("/category", categoryRouter)
  .use("/foodOrder", foodOrder)
  .use("/user", userRouter)
  .use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});
