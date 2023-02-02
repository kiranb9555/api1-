
const db = require("../model");
const student = db.students;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Date_of_birth) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // console.log(req.body,"******");
    // Create a Tutorial
    const students = new student({
      Date_of_birth: req.body.Date_of_birth,
      State_of_domicile: req.body.State_of_domicile,
      nationality: req.body.nationality,
      Scholarship_category: req.body.Scholarship_category,
      Name_of_student: req.body.Name_of_student,
      Mobile_number: req.body.Mobile_number,
      Email_id: req.body.Email_id,
      Bank_account_details: req.body.Bank_account_details,
      Identification_details: req.body.Identification_details,
    });
  
    // Save Tutorial in the database
    students
      .save(students)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the student."
        });
      });
  };



  exports.findAll = (req, res) => {
    const Mobile_number = req.params.Mobile_number;
    // var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  
    student.find({Mobile_number:Mobile_number})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };