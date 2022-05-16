import express, { Response } from "express";
import { readFileSync, writeFileSync } from "fs";
import { InferType, object, string } from "yup";
const router = express.Router();

const dateRegex = /^[0-2]\d{3}-(0\d|1[0-2])-([0-2]\d|3[0-1])$/;

const PostSchema = object({
  title: string().required().min(6).max(25),
  author: string().required().min(3).max(25),
  category: string().required().min(6).max(25),
  created_at: string().required().matches(dateRegex),
});

type Post = InferType<typeof PostSchema>;
type PostDB = Post & { id: number };

const castPost = (post: any): Post => {
  return <Post>PostSchema.cast(post);
};

const validatePost = (post: object | Post, res: Response): post is Post => {
  try {
    PostSchema.validateSync(post, { abortEarly: false });
    return true;
  } catch (error: any) {
    res.status(400).json({ error: error.errors });
    return false;
  }
};

const readDB = (): PostDB[] =>
  JSON.parse(readFileSync("db/posts.json", "utf8"));

const writeDB = (data: PostDB[]): void =>
  writeFileSync("db/posts.json", JSON.stringify(data));

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const posts = readDB();
  const post = posts.find((post) => post.id === Number(id));
  if (!post) return res.status(404).json({ error: "Post not found" });
  res.json({ ...post, id: undefined });
});

router.post("/", (req, res) => {
  const newPost = castPost(req.body);
  if (!validatePost(newPost, res)) return;
  const posts = readDB();
  const newId = posts[posts.length - 1]?.id + 1 || 1;
  posts.push({ ...newPost, id: newId });
  writeDB(posts);
  res.status(201).json(newPost);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newPost = castPost(req.body);
  if (!validatePost(newPost, res)) return;
  const posts = readDB();
  const postIndex = posts.findIndex((post) => post.id === Number(id));
  if (postIndex === -1)
    return res.status(404).json({ error: "Post not found" });
  posts[postIndex] = { ...newPost, id: Number(id) };
  writeDB(posts);
  res.status(201).json(newPost);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const posts = readDB();
  const postIndex = posts.findIndex((post) => post.id === Number(id));
  if (postIndex === -1)
    return res.status(404).json({ error: "Post not found" });
  posts.splice(postIndex, 1);
  writeDB(posts);
  res.status(204).json();
});

router.get("/", (req, res) => {
  const { author, category, created_at } = req.query;
  const posts = readDB();
  const filteredPosts = posts.filter((post) => {
    if (author && post.author !== author) return false;
    if (category && post.category !== category) return false;
    if (created_at && post.created_at !== created_at) return false;
    return true;
  });
  res.json(filteredPosts);
});

export default router;
