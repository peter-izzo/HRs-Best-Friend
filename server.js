//Dependencies
const sql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.tables");
const chalk = require("chalk");

const employee = require('./constructors/employee');
const department = require('./constructors/department');
const role = require('./constructors/role');