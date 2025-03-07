const express = require("express");
const router = express.Router();
const { Course } = require("../models");


// creating a course
router.post("/courses", async (req, res) => {
    const course = await Course.create(req.body);
    res.status(201).json(course);
});

// Get all courses
router.get("/courses", async(req, res) => {
    const courses = await Course.findAll();
    res.json(courses);
});

//Get courses ID
router.get("/course/:id", async (req, res) => {
    const course = await Course.findyByPk(req.params.id);
    res.json(course);
});

// Update course
router.put("/courses/:id", async (req, res) => {
    await Course.update(req.body, { where: { id: req.params.id } });
    res.json({ message: "Updated successfully" });
});

// Delete course
router.delete("/courses/:id", async (req, res) => {
    await Course.destroy({where: { id: req.params.id } });
    res.status(204).send();
});

module.exports = router;


