const router = require('express').Router();

const invalidData = {
  code: "Invalid data",
  status: 400
}
const invalidBody = {
  code: "Invalid body",
  status: 400
}

const validateCredentials = (req, _, next) => {
  const { username, email, password } = req.body;
  if (!email || !password ) return next({ ...invalidData, message: "Blank fields" });
  if (username !== undefined && username.length < 3)
    return next({ ...invalidData, message: 'Username must have more than 3 characters' });
  if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]{2,}$/))
    return next({ ...invalidData, message: 'Invalid email' });
  if (password.length < 4 || password.length > 8)
    return next({ ...invalidData, message: 'Password must be between 4 and 8 characters' });
  return next();
}

router.use(validateCredentials);

router.post('/register', (req, res, next) => {
  if (!req.body.username) return next({ ...invalidData, message: "Blank fields" });
  res.status(201).json({ message: 'User created' });
});

router.post('/login', (req, res) => {
  if (req.body.username) return next({ ...invalidBody, message: "Username in login field" });
  const token = Math.random().toString(36).substring(2, 14);
  res.status(200).json({ token });
})

module.exports = router;