const express = require("express");
const router = express.Router();
const { Teacher } = require("../models");


// creating a teacher
router.post("/teachers", async (req, res) => {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
});

// Get all teachers
router.get("/teachers", async(req,res) => {
    const teachers = await Teacher.findAll();
    res.json(teachers);
});

//Get teachers ID
router.get("/teachers/:id", async (req, res) => {
    const teaher = await Teacher.findyByPk(req.params.id);
    res.json(student);
});

// Update teacher
router.put("/teachers/:id", async (req, res) => {
    await Teacher.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Updates successfully" });
});

// Delete Teacher
router.delete("/teachers/:id", async (req, res) => {
    await Teacher.destroy({where: { id: req.params.id } });
});

module.exports = router;
