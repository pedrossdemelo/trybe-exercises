const express = require("express");
const app = express();
const rescue = require("express-rescue");
const userRouter = require("./routes/user");
const btcRouter = require("./routes/btc");
const postsRouter = require("./routes/posts");
const teamsRouter = require("./routes/teams");
const errorMiddleware = require("./errorMiddleware");
app.use(express.json());
app.use("/user", userRouter);
app.use("/btc", btcRouter);
app.use("/posts", postsRouter);
app.use("/teams", teamsRouter);
app.use(errorMiddleware);
app.use("*", (_, res) =>
  res.status(404).json({ code: "Not found", message: "Route not found" })
);
app.listen(3001, () => console.log("Server running on port 3001"));