const express = require("express");
const ProductService = require("../services/productService");

const router = express.Router();

router.get("/", async (_req, res) => {
  const { products, error, status } = await ProductService.getAll();

  res.status(status).json(products || { error });
});

router.get("/:id", async (req, res) => {
  const { product, error, status } = await ProductService.getById(
    req.params.id
  );

  res.status(status).json(product || { error });
});

router.post("/", async (req, res) => {
  const { name, brand } = req.body;

  const { newProduct, error, status } = await ProductService.add(name, brand);

  res.status(status).json(newProduct || { error });
});

router.delete("/:id", async (req, res) => {
  const { error, product, status } = await ProductService.exclude(
    req.params.id
  );

  res.status(status).json(product || { error });
});

router.put("/:id", async (req, res) => {
  const { name, brand } = req.body;

  const { product, status, error } = await ProductService.update(
    req.params.id,
    name,
    brand
  );

  res.status(status).json(product || { error });
});

module.exports = router;
