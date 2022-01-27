const router = require("express").Router();
const userModel = require("../model/user");

const validateRegisterInput = async (req, _res, next) => {
  if (req.method === "PUT" && (await userModel.get(req.params.id)) === null)
    return next({ status: 404, message: "User not found" });
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password)
    return next({ status: 400, message: "Missing required fields" });
  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  )
    return next({ status: 400, message: "Invalid field type" });
  if (password.length < 6)
    return next({
      status: 400,
      message: "Password must be at least 6 characters",
    });
  if ((await userModel.isEmailUnique(email)) === false) {
    if (
      req.method === "PUT" &&
      req.body.email === (await userModel.get(Number(req.params.id))).email
    ) {
      console.log("hey");
      return next();
    }
    return next({ status: 400, message: "Email already in use" });
  }
  return next();
};

router.post("*", validateRegisterInput); // Validate register input middleware

router.post("/", async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const user = {
    firstName,
    lastName,
    email,
    password,
  };
  let id = null;
  try {
    id = await userModel.register(user);
  } catch (error) {
    return next(error);
  }
  const returnData = {
    id,
    ...user,
    password: undefined,
  };
  res.status(201).json(returnData);
});

router.get("/", async (_req, res) => {
  const users = await userModel.getAll();
  res.json(users);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) return next({ status: 400, message: "Invalid field type" });
  const user = await userModel.get(Number(id));
  if (!user) return next({ status: 404, message: "User not found" });
  res.json(user);
});

router.put("/:id", validateRegisterInput, async (req, res, next) => {
  const { id } = req.params;
  if (isNaN(id)) return next({ status: 400, message: "Invalid field type" });
  const { firstName, lastName, email, password } = req.body;
  const user = {
    firstName,
    lastName,
    email,
    password,
  };
  try {
    await userModel.put(Number(id), user);
  } catch (error) {
    return next(error);
  }
  const returnData = {
    id,
    ...user,
    password: undefined,
  };
  res.json(returnData);
});

module.exports = router;
