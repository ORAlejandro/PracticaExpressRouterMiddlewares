const express = require("express");
const router = express.Router();

const users = [];

router.get("/", (req, res) => {
    res.json(users);
});

router.post("/", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.send({status: "success", message: "User created"});
});

module.exports = router;