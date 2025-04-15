import express from "express";
import foodRouter from "./routers/food.route";
import { connectToDataBase } from "./database/connect-todb";
import categoryRouter from "./routers/category.route";

connectToDataBase();

const app = express();

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.use(foodRouter);

app.listen(port, () => {
  console.log(`Example app listening on port${port}`);
});
