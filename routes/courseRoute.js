const express = require("express");
const router = express.Router();
const { Course } = require("../models");

// Create a Course
router.post("/courses", async (req, res) => {
    try {
        const { name, description } = req.body;

        // Validate input
        if (!name || !description) {
            return res.status(400).json({ error: "Name and Description are required" });
        }

        const course = await Course.create({ name, description });
        res.status(201).json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all Courses
router.get("/courses", async (req, res) => {
    try {
        const courses = await Course.findAll();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Course by ID
router.get("/courses/:id", async (req, res) => {  // ✅ Fix typo in route
    try {
        const course = await Course.findByPk(req.params.id);

        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Course by ID
router.put("/courses/:id", async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        await course.update(req.body);
        res.json({ message: "Updated successfully", course });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Course by ID
router.delete("/courses/:id", async (req, res) => {
    try {
        const course = await Course.findByPk(req.params.id);
        
        if (!course) {
            return res.status(404).json({ error: "Course not found" });
        }

        await course.destroy();
        res.json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
