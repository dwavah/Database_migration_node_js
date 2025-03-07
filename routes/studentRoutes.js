const express = require("express");
const router = express.Router();
const { Student } = require("../models");

// Create a Student
router.post("/students", async (req, res) => {
    try {
        const { name, email } = req.body;

        // ✅ Validate input
        if (!name || !email) {
            return res.status(400).json({ error: "Name and Email are required" });
        }

        const student = await Student.create({ name, email });
        res.status(201).json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all students
router.get("/students", async (req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get student by ID
router.get("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id); // ✅ Fix typo here

        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update student by ID
router.put("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        await student.update(req.body);
        res.json({ message: "Updated successfully", student });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete student by ID
router.delete("/students/:id", async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);
        
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }

        await student.destroy();
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;

