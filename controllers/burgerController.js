var router = require("express").Router();

var burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((err, data) => {
        let burgersOrderedByDevoured = data.sort((a, b) => b.devoured - a.devoured);
        let burgersOrderedByName = [...data].sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? -1 : 0);
        
        res.render("index", {
            burgersOrderedByName: burgersOrderedByName,
            burgersOrderedByDevoured: burgersOrderedByDevoured
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
