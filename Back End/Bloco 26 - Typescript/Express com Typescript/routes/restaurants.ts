import express, { Response } from "express";
import { readFileSync, writeFileSync } from "fs";
import { InferType, object, string } from "yup";
const router = express.Router();

const hourRegex = /^([0-1]\d|2[0-3]):([0-5]\d)$/;

const RestaurantSchema = object({
  nome: string().required().min(6).max(25),
  tipoDeComida: string().required().min(3).max(25),
  horarioDeAbertura: string().required().matches(hourRegex),
  horarioDeFechamento: string().required().matches(hourRegex),
});

type Restaurant = InferType<typeof RestaurantSchema>;
type RestaurantDB = Restaurant & { id: number };

const castRestaurant = (restaurant: any): Restaurant => {
  return <Restaurant>RestaurantSchema.cast(restaurant);
};

const validateRestaurant = (
  restaurant: object | Restaurant,
  res: Response
): restaurant is Restaurant => {
  try {
    RestaurantSchema.validateSync(restaurant, { abortEarly: false });
    return true;
  } catch (error: any) {
    res.status(400).json({ error: error.errors });
    return false;
  }
};

const readDB = (): RestaurantDB[] =>
  JSON.parse(readFileSync("db/restaurants.json", "utf8"));

const writeDB = (data: RestaurantDB[]): void =>
  writeFileSync("db/restaurants.json", JSON.stringify(data));

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const restaurants = readDB();
  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === Number(id)
  );
  if (!restaurant)
    return res.status(404).json({ error: "Restaurant not found" });
  res.json({ ...restaurant, id: undefined });
});

router.post("/", (req, res) => {
  const newRestaurant = castRestaurant(req.body);
  if (!validateRestaurant(newRestaurant, res)) return;
  const restaurants = readDB();
  const newId = restaurants[restaurants.length - 1]?.id + 1 || 1;
  restaurants.push({ ...newRestaurant, id: newId });
  writeDB(restaurants);
  res.status(201).json(newRestaurant);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newRestaurant = castRestaurant(req.body);
  if (!validateRestaurant(newRestaurant, res)) return;
  const restaurants = readDB();
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === Number(id)
  );
  if (restaurantIndex === -1)
    return res.status(404).json({ error: "Restaurant not found" });
  restaurants[restaurantIndex] = { ...newRestaurant, id: Number(id) };
  writeDB(restaurants);
  res.status(201).json(newRestaurant);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const restaurants = readDB();
  const restaurantIndex = restaurants.findIndex(
    (restaurant) => restaurant.id === Number(id)
  );
  if (restaurantIndex === -1)
    return res.status(404).json({ error: "Restaurant not found" });
  restaurants.splice(restaurantIndex, 1);
  writeDB(restaurants);
  res.status(204).json();
});

function isOpen(closingHour: string, openingHour: string): boolean {
  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();
  const closingHourSplit = closingHour.split(":");
  const closingHourInt =
    Number(closingHourSplit[0]) * 60 + Number(closingHourSplit[1]);
  const openingHourSplit = openingHour.split(":");
  const openingHourInt =
    Number(openingHourSplit[0]) * 60 + Number(openingHourSplit[1]);
  const currentHourInt = currentHour * 60 + currentMinutes;
  return currentHourInt < closingHourInt && currentHourInt > openingHourInt;
}

router.get("/", (req, res) => {
  let { open } = req.query;
  let openBool = open === "true";
  const restaurants = readDB();
  const filteredRestaurants = restaurants.filter(
    ({ horarioDeAbertura, horarioDeFechamento }) => {
      if (openBool && isOpen(horarioDeFechamento, horarioDeAbertura))
        return true;
      return false;
    }
  );
  res.json(filteredRestaurants);
});

export default router;
