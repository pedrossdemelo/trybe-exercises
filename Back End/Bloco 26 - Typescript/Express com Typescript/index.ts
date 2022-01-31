import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import userRouter from "./routes/users";
import postsRouter from "./routes/posts";

const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postsRouter);
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
