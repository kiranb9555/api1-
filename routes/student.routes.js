module.exports = app => {
    const student = require("../controllers/student.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/studentlogindetails/newreg/", student.create);
  
    // // Retrieve all Tutorials
    router.get("/studentlogindetails/getnewreg/:Mobile_number", student.findAll);

  
    app.use('', router);
  };