const router = require("express").Router();

// create boiler plate for 15 posts

const posts = [
  {
    id: 1,
    title: "I just did a thing",
    body: "I did a thing and it was awesome",
  },
  {
    id: 2,
    title: "I just did another thing",
    body: "I did another thing and it was awesome",
  },
  {
    id: 3,
    title: "I just did a third thing",
    body: "I did a third thing and it was awesome",
  },
  {
    id: 4,
    title: "I just did a fourth thing",
    body: "I did a fourth thing and it was awesome",
  },
  {
    id: 5,
    title: "I just did a fifth thing",
    body: "I did a fifth thing and it was awesome",
  },
  {
    id: 6,
    title: "I just did a sixth thing",
    body: "I did a sixth thing and it was awesome",
  },
];

router.get("/:id", (req, res, next) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if (!post) return next({ code: "Not found" , status: 404, message: "Post not found" });
  res.status(200).json(post);
});

router.get("/", (_, res) => {
  res.status(200).json(posts);
})

module.exports = router;