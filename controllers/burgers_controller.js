var express = require("express");

var router = express.Router();
// var burger = require("../models/burger");
var db = require("../models");


// get route -> index
router.get("/", function(req, res) {
  // burger.findAll({}).then(function(data) {
  //   var hbsObject = { burgers: data};
  //   res.render("index", hbsObject);
  // })
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.Burger.findAll({}).then(function(data) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function(result) {
   console.log(res.body);
   res.redirect("/");
  });
  
});

// put route -> back to index
router.put("/burgers/update", function(req, res) {
  db.Burger.update({

  devoured:true
  },
  {
    where: {id: 6}
  })
  .then(function(result) {
    console.log("this is id:", req.body.id);
    res.redirect("/");
  });
});



module.exports = router;

