const router = require("express").Router();

const invalidBody = {
  code: "Invalid body",
  status: 400,
};

const teams = [
  {
    id: 1,
    name: "Clube Atlético Mineiro",
    initials: "CAM",
    country: "Brazil",
    league: "Brasileirão",
  },
];

router.get("/", (_, res) => {
  res.status(200).json(teams);
});

const validateTeam = (req, _, next) => {
  const { name, initials, country, league } = req.body;
  if (!name || !initials || !country)
    next({ ...invalidBody, message: "Blank fields" });
  if (name.length < 5)
    next({ ...invalidBody, message: "Name must have more than 5 characters" });
  if (initials.length > 3)
    next({
      ...invalidBody,
      message: "Initials must have 3 or less characters",
    });
  if (teams.some((team) => team.initials === initials))
    return next({
      code: "Duplicate data",
      status: 400,
      message: "Team already exists",
    });
  if (country.length < 3)
    return next({
      ...invalidBody,
      message: "Country must have more than 3 characters",
    });
  if (league.length < 3 || league.length > 20)
    return next({
      ...invalidBody,
      message: "League must have between 3 and 20 characters",
    });
  return next();
};

router.use(validateTeam);

router.post("/", (req, res) => {
  const { name, initials, country, league } = req.body;
  teams.push({
    id: teams.length + 1,
    name,
    initials,
    country,
    league,
  });
  res.status(201).json({ message: "Team created" });
});

module.exports = router;