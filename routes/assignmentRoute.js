const express = require("express");
const router = express.Router();
const { Assignment } = require("../models");

// Create an Assignment
router.post("/assignments", async (req, res) => {
    try {
        const { title, due_date } = req.body;

        // Validate input
        if (!title || !due_date) {
            return res.status(400).json({ error: "Title and Due Date are required" });
        }

        const assignment = await Assignment.create({ title, due_date });
        res.status(201).json(assignment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get all Assignments
router.get("/assignments", async (req, res) => {
    try {
        const assignments = await Assignment.findAll();
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Assignment by ID
router.get("/assignments/:id", async (req, res) => {
    try {
        const assignment = await Assignment.findByPk(req.params.id);

        if (!assignment) {
            return res.status(404).json({ error: "Assignment not found" });
        }

        res.json(assignment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update Assignment by ID
router.put("/assignments/:id", async (req, res) => {
    try {
        const assignment = await Assignment.findByPk(req.params.id);
        
        if (!assignment) {
            return res.status(404).json({ error: "Assignment not found" });
        }

        await assignment.update(req.body);
        res.json({ message: "Updated successfully", assignment });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete Assignment by ID
router.delete("/assignments/:id", async (req, res) => {
    try {
        const assignment = await Assignment.findByPk(req.params.id);
        
        if (!assignment) {
            return res.status(404).json({ error: "Assignment not found" });
        }

        await assignment.destroy();
        res.json({ message: "Assignment deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
