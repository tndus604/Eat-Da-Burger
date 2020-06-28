var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.all("burgers", function(res) {
            callback(res);
        });
    },
    create: function(burger_name, callback) {
        orm.create(burger_name, function(res) {
            callback(res);
        });
    },
    update: function(selectedID, callback) {
        orm.update(selectedID, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;