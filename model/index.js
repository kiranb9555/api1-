const dbConfig = require("../db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.students = require("../model/student.model")(mongoose);

module.exports = db;