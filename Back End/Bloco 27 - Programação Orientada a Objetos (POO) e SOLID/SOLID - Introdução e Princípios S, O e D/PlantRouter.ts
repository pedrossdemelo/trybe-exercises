import Express from "express";
import PlantDatabase from "./Plants";

const db = new PlantDatabase("plants.json", "ops.json");
const router = Express.Router();

router.get("/", async (req, res) => {
  res.json(await db.read());
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const plant = await db.getPlantById(id);
  if (!plant) return res.status(404).json({ error: "Plant not found" });
  res.json(plant);
});

export default router;
