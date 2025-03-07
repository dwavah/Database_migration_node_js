const express = require("express");
const router = express.Router();
const { Teacher } = require("../models");

// Create a Teacher
router.post("/teachers", async (req, res) => {
    try {
        const { name, subject } = req.body;

        // validate input
        if (!name || !subject) {
            return res.status(400).json({ error: "Name and Subject are required" });
        }

        const teacher = await Teacher.create({ name, subject });
        res.status(201).json(teacher);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all Teachers
router.get("/teachers", async (req, res) => {
    try {
        const teachers = await Teacher.findAll();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a Teacher by ID
router.get("/teachers/:id", async (req, res) => {
    try {
        const teacher = await Teacher.findByPk(req.params.id); // ✅ Fix typo

        if (!teacher) {
            return res.status(404).json({ error: "Teacher not found" });
        }

        res.json(teacher);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Teacher by ID
router.put("/teachers/:id", async (req, res) => {
    try {
        const teacher = await Teacher.findByPk(req.params.id);
        
        if (!teacher) {
            return res.status(404).json({ error: "Teacher not found" });
        }

        await teacher.update(req.body);
        res.json({ message: "Updated successfully", teacher });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Teacher by ID
router.delete("/teachers/:id", async (req, res) => {
    try {
        const teacher = await Teacher.findByPk(req.params.id);
        
        if (!teacher) {
            return res.status(404).json({ error: "Teacher not found" });
        }

        await teacher.destroy();
        res.json({ message: "Teacher deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
