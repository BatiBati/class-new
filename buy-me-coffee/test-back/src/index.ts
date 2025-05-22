import express from "express";
import { userRouter } from "./routers/user.route";

const app = express();

const port = 3001;

// app.get(`/`, (req, res) => {
//   res.send("Helos ");
// });

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
