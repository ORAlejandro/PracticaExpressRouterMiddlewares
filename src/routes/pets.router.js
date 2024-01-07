const express = require("express");
const router = express.Router();

const pets = [];

router.get("/", (req, res) => {
    res.json(pets);
});

router.post("/", (req, res) => {
    const newPet = req.body;
    pets.push(newPet);
    res.send({status: "success", message: "Pet created"});
});

module.exports = router;