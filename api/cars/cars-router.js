const express = require("express");
const Car = require("./cars-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
    res.json("getting car by id")
})

router.post("/", async (req, res, next) => {
    res.json("Uploading Car")
})

module.exports = router;
