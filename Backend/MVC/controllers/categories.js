const { pool } = require("../models/db");

pool;
const addNewCategory = async (req, res) => {
  const { name, description, imgsrc } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO categories (name,description,imgsrc) VALUES ($1,$2,$3) RETURNING *`,
      [name, description, imgsrc]
    );
    res.status(201).json({
        success:true,
        result:result.rows
    })
  } catch (err) {
    res.status(500).json({
        success:false,
        result : "Server error"
    })   
  }
};

module.exports = {addNewCategory}