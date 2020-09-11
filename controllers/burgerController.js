var router = require("express").Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((err, data) => {
        console.log(data);
        res.render("index", {
            burgers: data
        });
    });
});

router.post("/api/burgers", (req, res) => {
    let objectData = {
        "name": req.body.name,
        "devoured": 0
    };

    console.log(objectData);

    burger.create(objectData, (err, data) => res.json(data));
});

router.put("/api/burgers/", (req, res) => {
    let devoured = req.body.devoured++;
    let object = {
        id: req.body.id,
        devoured: devoured
    };
    burger.update(object, (err, data) => res.json(data));
});

module.exports = router;
