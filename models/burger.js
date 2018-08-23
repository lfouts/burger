
//importing the ORM to create the functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  //create
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  //update
  update: function(id, cb) {
    var eaten = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, eaten, cb);
  }
};

module.exports = burger;
