var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");
const { response } = require("express");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("/api/newBurger", function(req, res) {
    burgers.create( request.body.burger_name, function(result) {
        response.json({id: result.insertId});
        console.log("Newly added ID: ", result.insertId);
    })
});

router.put("/api/update", function(req, res) {
    console.log(request.body.id);
    burger.update( request.body.id, function(result) {
        response.json({id: result.insertId});
        console.log("Updated ID: ", result.insertId);
    })
});

module.exports = router;