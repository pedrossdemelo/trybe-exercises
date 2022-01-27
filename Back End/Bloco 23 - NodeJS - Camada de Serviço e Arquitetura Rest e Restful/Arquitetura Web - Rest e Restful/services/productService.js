const productModel = require('../models/productModel');

const add = async (name, brand) => {
  const { error, newProduct } = await productModel.add(name, brand);
  console.log(newProduct);
  switch (error) {
    case undefined: break;
    case "Not found": return { status: 404, error };
    default: return { status: 500, error };
  }
  return { status: 201, newProduct };
}

const getAll = async () => {
  const { error, products } = await productModel.getAll();
  switch (error) {
    case undefined: break;
    case "Not found": return { status: 404, error };
    default: return { status: 500, error };
  }
  return { status: 200, products };
}

const getById = async (id) => {
  const { error, product } = await productModel.getById(id);
  switch (error) {
    case undefined: break;
    case "Not found": return { status: 404, error };
    default: return { status: 500, error };
  }
  return { status: 200, product };
}

const update = async (id, name, brand) => {
  const { error, product } = await productModel.update(id, name, brand);
  switch (error) {
    case undefined: break;
    case "Not found": return { status: 404, error };
    default: return { status: 500, error };
  }
  return { status: 200, product };
}

const exclude = async (id) => {
  const { error, product } = await productModel.exclude(id);
  switch (error) {
    case undefined: break;
    case "Not found": return { status: 404, error };
    default: return { status: 500, error };
  }
  return { status: 200, product };
}

module.exports = { add, getAll, getById, update, exclude };