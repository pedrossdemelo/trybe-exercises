import express, { Response } from "express";
import { readFileSync, writeFileSync } from "fs";
import { InferType, number, object, string } from "yup";
const router = express.Router();

const dateRegex = /^([0-2]\d|3[0-1])\/(0\d|1[0-2])\/[0-2]\d{3}$/;

const ProductSchema = object({
  nome: string().required().min(6).max(25),
  marca: string().required().min(3).max(25),
  preco: number().required().min(0.5).max(100),
  dataFabricacao: string().required().matches(dateRegex),
  dataValidade: string().required().matches(dateRegex),
});

type Product = InferType<typeof ProductSchema>;
type ProductDB = Product & { id: number };

const castProduct = (product: any): Product => {
  return <Product>ProductSchema.cast(product);
};

const validateProduct = (
  product: object | Product,
  res: Response
): product is Product => {
  try {
    ProductSchema.validateSync(product, { abortEarly: false });
    return true;
  } catch (error: any) {
    res.status(400).json({ error: error.errors });
    return false;
  }
};

const readDB = (): ProductDB[] =>
  JSON.parse(readFileSync("db/products.json", "utf8"));

const writeDB = (data: ProductDB[]): void =>
  writeFileSync("db/products.json", JSON.stringify(data));

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const products = readDB();
  const product = products.find((product) => product.id === Number(id));
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json({ ...product, id: undefined });
});

router.post("/", (req, res) => {
  const newProduct = castProduct(req.body);
  if (!validateProduct(newProduct, res)) return;
  const products = readDB();
  const newId = products[products.length - 1]?.id + 1 || 1;
  products.push({ ...newProduct, id: newId });
  writeDB(products);
  res.status(201).json(newProduct);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const newProduct = castProduct(req.body);
  if (!validateProduct(newProduct, res)) return;
  const products = readDB();
  const productIndex = products.findIndex(
    (product) => product.id === Number(id)
  );
  if (productIndex === -1)
    return res.status(404).json({ error: "Product not found" });
  products[productIndex] = { ...newProduct, id: Number(id) };
  writeDB(products);
  res.status(201).json(newProduct);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const products = readDB();
  const productIndex = products.findIndex(
    (product) => product.id === Number(id)
  );
  if (productIndex === -1)
    return res.status(404).json({ error: "Product not found" });
  products.splice(productIndex, 1);
  writeDB(products);
  res.status(204).json();
});

function isExpired(date: string) {
  const today = new Date();
  const dateToCompare = new Date(date);
  return dateToCompare < today;
}

router.get("/", (req, res) => {
  let { preco, marca, consumable } = req.query;
  let consumableBool = consumable === "true";
  let actualPreco: number | undefined = Number(preco);
  actualPreco = isNaN(actualPreco) ? undefined : actualPreco;
  const products = readDB();
  const filteredProducts = products.filter((product) => {
    if (actualPreco && actualPreco < product.preco) return false;
    if (marca && marca !== product.marca) return false;
    if (consumableBool && isExpired(product.dataValidade)) return false;
    return true;
  });
  res.json(filteredProducts);
});

export default router;
