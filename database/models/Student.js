/*==================================================
/database/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imgURL: {
    type: Sequelize.STRING
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  gpa: {
    type: Sequelize.STRING
  }
  
});

// Export the student model
module.exports = Student;