const express = require("express");
const router = express.Router();
const { Assignment } = require("../models");


// creating a assignment
router.post("/assignments", async (req, res) => {
    const assignment = await Assignment.create(req.body);
    res.status(201).json(assignment);
});

// Get all assignment
router.get("/assignments", async(req,res) => {
    const assignment = await Assignment.findAll();
    res.json(assignments);
});

//Get assignment ID
router.get("/assignments/:id", async (req, res) => {
    const assignment = await Assignment.findyByPk(req.params.id);
    res.json(assignment);
});

// Update assignment
router.put("/assignments/:id", async (req, res) => {
    await Assignment.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Updates successfully" });
});

// Delete assignment
router.delete("/assignments/:id", async (req, res) => {
    await Assignment.destroy({where: { id: req.params.id } });
    res.status(204).send();
});

module.exports = router;
