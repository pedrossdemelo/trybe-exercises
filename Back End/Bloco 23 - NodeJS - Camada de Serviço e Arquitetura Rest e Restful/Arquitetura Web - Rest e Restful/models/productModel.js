const connection = require("./connection");

const add = async (name, brand) => {
  try {
    const [result] = await connection.query(
      `INSERT INTO products (name, brand) VALUES (?, ?);`,
      [name, brand]
    );
    return { product: { id: result.insertId, name, brand } };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const getAll = async () => {
  try {
    const [rows] = await connection.query("SELECT * FROM products");
    return rows;
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const getById = async (id) => {
  try {
    const [result] = await connection.query(
      "SELECT * FROM products WHERE id = ?",
      [id]
    );
    if (!result.length) return { error: "Not found" };
    return { product: result[0] };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const update = async (id, name, brand) => {
  try {
    await connection.query(
      "UPDATE products SET name = ?, brand = ? WHERE id = ?",
      [name, brand, id]
    );
    return { product: { id, name, brand } };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return { error: "Not found" };
    await connection.query("DELETE FROM products WHERE id = ?", [id]);
    return { product };
  } catch (error) {
    console.error(error);
    return { error };
  }
};

module.exports = { add, getAll, getById, update, exclude };
