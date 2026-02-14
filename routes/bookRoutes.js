const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const { createBook, getBooks, getBookById, updateBook, deleteBook } = require("../controllers/bookController");

router.post("/", protect, createBook);
router.get("/", getBooks);
router.get("/:id", getBookById);
router.put("/:id", protect, updateBook);
router.delete("/:id", protect, deleteBook);
module.exports = router;
