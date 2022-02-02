import fs from "fs/promises";

const read = async (path: string): Promise<any> => {
  const data = await fs.readFile(path, "utf-8");
  return JSON.parse(data);
};

const write = async (path: string, data: any): Promise<void> => {
  await fs.writeFile(path, JSON.stringify(data));
};

interface PlantInfo {
  id: string;
  breed: string;
  needsSun: Boolean;
  origin: string;
  size: number;
  specialCare?: { waterFrequency: number };
}

class Plant implements PlantInfo {
  constructor(
    public id: string,
    public breed: string,
    public needsSun: Boolean,
    public origin: string,
    public size: number,
    public specialCare?: { waterFrequency: number }
  ) {
    // TODO: Throw errors when invalid data is passed in
    if (!this.specialCare) {
      const waterFrequency = needsSun
        ? size * 0.77 + (origin === "Brazil" ? 8 : 7)
        : (size / 2) * 1.33 + (origin === "Brazil" ? 8 : 7);
      this.specialCare = { waterFrequency };
    }
  }
}

interface IOpsInfo {
  createdPlants: number;
}

class Database<T> {
  constructor(public path: string) {}

  async read(): Promise<T[]> {
    return await read(this.path);
  }

  async write(data: object[]) {
    await write(this.path, data);
  }
}
export default class PlantDatabase extends Database<Plant> {
  constructor (path: string, public internalsPath: string) {
    super(path);
  }

  private async _updateOpsInfo() {
    let { createdPlants }: IOpsInfo = await read(this.internalsPath);
    createdPlants++;
    await write(this.internalsPath, { createdPlants });
  }

  async getPlantById(id: string) {
    const plants = await this.read();
    const plantById = plants.find((plant) => plant.id === id);
    return plantById ? plantById : null;
  }

  async removePlantById(id: string) {
    const plants = await this.read();
    const plantToBeRemoved = plants.find((plant) => plant.id === id);
    if (!plantToBeRemoved) return null;
    else await this.write(plants.filter((plant) => plant.id !== id));
    return plantToBeRemoved;
  }

  async getPlantsThatNeedsSunWithId(id: string) {
    const plants = await this.read();
    const filteredPlants = plants.filter((plant) => {
      if (plant.needsSun && plant.id === id) {
        return !plant.specialCare || plant.specialCare.waterFrequency > 2;
      }
      return false;
    });
    return filteredPlants;
  }

  async editPlant(plantId: string, newPlant: Plant) {
    const plants = await this.read();
    const updatedPlants = plants.map((plant) => {
      if (plant.id === plantId) return newPlant;
      return plant;
    });
    await this.write(updatedPlants);
    return newPlant;
  }

  async savePlant(plant: PlantInfo) {
    const { id, breed, needsSun, origin, size, specialCare } = plant;
    let newPlant;
    try {
      newPlant = new Plant(id, breed, needsSun, origin, size, specialCare);
    } catch (error) {
      return error;
    }
    const plants = await this.read();
    plants.push(newPlant);
    this._updateOpsInfo();
    await this.write(plants);
    return newPlant;
  }
}
