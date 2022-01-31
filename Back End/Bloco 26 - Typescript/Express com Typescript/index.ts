import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import usersRouter from "./routes/users";
import postsRouter from "./routes/posts";
import productsRouter from "./routes/products";
import restaurantsRouter from "./routes/restaurants";

const app = express();

app.use(express.json());
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/products", productsRouter);
app.use("/restaurants", restaurantsRouter);
app.use("*", (_req, res) => {
  res.status(404).json({ error: "Not found" });
})
app.use(
  (
    err: ErrorRequestHandler | any,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(err.status).json({ error: err.message });
  }
);

app.listen(3000, () => console.log("Server started on port 3000"));
