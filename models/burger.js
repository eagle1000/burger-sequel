// Dependencies

//Require the sequelize library
// var Sequelize = require("sequelize");
// //Require connection to database
// var sequelize = require("../config/connection.js");

// Creates a "burger" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
	// body...

var Burger = sequelize.define("Burger", {
  burger_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  devoured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});
return Burger;
}

// Syncs with DB
// burger.sync();
// module.exports = burger;
