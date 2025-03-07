const express = require("express");
const router = express.Router();
const { Student } = require("../models");


// creating a student
router.post("/students", async (req, res) => {
    const student = await Student.create(req.body);
    res.status(201).json(student);
});

// Get all students
router.get("/students", async(req,res) => {
    const students = await Student.findAll();
    res.json(students);
});

//Get students ID
router.get("/students/:id", async (req, res) => {
    const student = await Student.findyByPk(req.params.id);
    res.json(student);
});

// Update student
router.put("/students/:id", async (req, res) => {
    await Student.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Updates successfully" });
});

// Delete Student
router.delete("/students/:id", async (req, res) => {
    await Student.destroy({where: { id: req.params.id } });
    res.status(204).send();
});

module.exports = router;
