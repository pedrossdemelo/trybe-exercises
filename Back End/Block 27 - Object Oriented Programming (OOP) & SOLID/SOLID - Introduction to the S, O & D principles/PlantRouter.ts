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
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const plant = await db.removePlantById(id);
  if (!plant) return res.status(404).json({ error: "Plant not found" });
  res.status(204).json(plant);
})
router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const plant = await db.editPlant(id, req.body);
  if (!plant) return res.status(404).json({ error: "Plant not found" });
  res.status(201).json(plant);
})
router.post("/", async (req, res) => {
  const plant = await db.savePlant(req.body);
  res.status(201).json(plant);
})
router.get("/sunny/:id", async (req, res) => {
  const { id } = req.params;
  const plants = await db.getPlantsThatNeedsSunWithId(id);
  res.json(plants);
})

export default router;
