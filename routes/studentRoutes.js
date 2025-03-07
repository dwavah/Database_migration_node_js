const express = require("express");
const router = express.Router();
const { Student } = require("../models");


// creating a student
router.post("/students", async (req, res) => {
    const student = await Student.create(req.body);
    res.status(201).json(student);
});
 
