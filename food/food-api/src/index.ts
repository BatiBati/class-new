import express from "express";

import { connectToDataBase } from "./database/connect-todb";

import { foodRouter } from "./routers/food.route";
import { categoryRouter } from "./routers/category.route";
import { foodOrder } from "./routers/foodOrder.route";
import { user } from "./routers/user.route";

connectToDataBase();

const app = express();

const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.use("/food", foodRouter);
app.use("/category", categoryRouter);
app.use("/foodOrder", foodOrder);
app.use("/user", user);

app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});
