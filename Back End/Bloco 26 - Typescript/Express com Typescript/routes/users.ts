import express, { Response } from "express";
import { readFileSync, writeFileSync } from "fs";
import { InferType, object, string } from "yup";
const router = express.Router();

let UserSchema = object({
  name: string().required().min(6).max(25),
  email: string().required().email(),
  password: string().required().min(6).max(12),
});

type User = InferType<typeof UserSchema>;
type UserDB = User & { id: number };

const castUser = (user: any): User => {
  return <User>UserSchema.cast(user);
};

const validateUser = (user: object | User, res: Response): user is User => {
  try {
    UserSchema.validateSync(user, { abortEarly: false });
    return true;
  } catch (error: any) {
    res.status(400).json({ error: error.errors });
    return false;
  }
};

router.get("/", (_req, res) => {
  res.send(readFileSync("db/users.json", "utf8"));
});

router.post("/", (req, res) => {
  const newUser = castUser(req.body);
  if (!validateUser(newUser, res)) return;
  const users: UserDB[] = JSON.parse(readFileSync("db/users.json", "utf8"));
  if (users.find((user: User & { id: number }) => user.email === newUser.email))
    return res.status(400).json({ error: "Email already exists" });
  const newId = users[users.length - 1]?.id + 1 || 1;
  users.push({ ...newUser, id: newId });
  writeFileSync("db/users.json", JSON.stringify(users));
  res.status(201).json(newUser);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const users = JSON.parse(readFileSync("db/users.json", "utf8"));
  const user = users.find(
    (user: User & { id: number }) => user.id === Number(id)
  );
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ ...user, id: undefined });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newUser = castUser(req.body);
  if (!validateUser(newUser, res)) return;
  const users: UserDB[] = JSON.parse(readFileSync("db/users.json", "utf8"));
  const userIndex = users.findIndex((user) => user.id === Number(id));
  if (userIndex === -1)
    return res.status(404).json({ error: "User not found" });
  users[userIndex] = { ...newUser, id: Number(id) };
  writeFileSync("db/users.json", JSON.stringify(users));
  res.json(newUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const users: UserDB[] = JSON.parse(readFileSync("db/users.json", "utf8"));
  const userIndex = users.findIndex((user) => user.id === Number(id));
  if (userIndex === -1)
    return res.status(404).json({ error: "User not found" });
  users.splice(userIndex, 1);
  writeFileSync("db/users.json", JSON.stringify(users));
  res.sendStatus(204);
});

export default router;
