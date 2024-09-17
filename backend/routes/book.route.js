import express from "express";
import { Router } from "express";

import {
  deleteBook,
  getBooks,
  getBooksId,
  postBook,
  putBook,
} from "../controllers/book.controller.js";
const app = express();
const router = app.use(Router());

router.get("/", getBooks);
router.get("/:id", getBooksId);
router.post("/", postBook);
router.put("/:id", putBook);
router.delete("/:id", deleteBook);

export const bookRoute = router;
