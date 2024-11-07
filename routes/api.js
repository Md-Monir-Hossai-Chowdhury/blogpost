import express from "express";
const router = express.Router();
import * as blogController from "../app/controllers/taskController.js";


// Create Route
router.post("/create-bolg",blogController.createBlog);

// Read Route
router.get("/read-blog",blogController.readBlog);

// Update Route
router.put("/update-blog",blogController.updateBlog);

// Delete Route
router.delete("/delete-blog",blogController.deleteBlog);


export default router;