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

router.post("/api/newburger", function(req, res) {
    burger.create( req.body.burger_name, function(result) {
        res.json({id: result.insertId});
        console.log("Newly added ID: ", result.insertId);
    })
});

router.put("/api/update", function(req, res) {
    console.log(req.body.id);
    burger.update( request.body.id, function(result) {
        res.json({id: result.insertId});
        console.log("Updated ID: ", result.insertId);
    })
});

module.exports = router;