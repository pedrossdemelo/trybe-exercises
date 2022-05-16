const express = require("express");
const app = express();
const userRoute = require("./routes/user");
const errorMiddleware = require("./errorMiddleware");

app.use(express.json());
app.use("/user", userRoute);
app.use(errorMiddleware);
app.listen(3000, () => console.log("Server started on port 3000"));