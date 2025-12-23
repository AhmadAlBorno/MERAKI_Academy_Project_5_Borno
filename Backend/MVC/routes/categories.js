const express = require("express")
const { addNewCategory } = require("../controllers/categories")
const categoriesRouter = express.Router()

//====================
categoriesRouter.post("/addnewcategory", addNewCategory)
//====================

module.exports = categoriesRouter