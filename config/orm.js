var connection = require("./connection.js");
  
  // selectAll method
var orm = {
    all: function(getTable, callback) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, getTable, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      })
    },
    // insertOne method
    create: function(newBurger, callback) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES (?)";
      connection.query(queryString, newBurger, function(err, result) {
        if (err)  {
          throw err;
        }
        callback(result);
      })
    },

    // updateOne method
    update: function(selectedID, callback) {
      var queryString = "UPDATE burgers SET devoured = NOT devoured WHERE id = ?";
      connection.query(queryString, selectedID, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      })
    }
};

module.exports = orm;