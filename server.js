//Dependencies
const sql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.table");
const chalk = require("chalk");
const PORT = process.env.PORT || 3306;

const conn = sql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Neverm0re!",
    database: "Employee_Tracker",
});
conn.connect((err) => {
    if (err) {
    throw err;
    }
    console.log(`Connected as id: ${conn.threadId}`);
    console.log(`Connected to PORT: ${PORT}`);
    console.log(chalk.cyanBright(`
    
======================================================================================================
_____                    _                             _____                     _                
|  ___|                  | |                           |_   _|                   | |               
| |__   _ __ ___   _ __  | |  ___   _   _   ___   ___    | |   _ __   __ _   ___ | | __  ___  _ __ 
|  __| | '_   _ \ | '_ \ | | / _ \ | | | | / _ \ / _ \   | |  | '__| / _  | / __|| |/ / / _ \| '__|
| |___ | | | | | || |_) || || (_) || |_| ||  __/|  __/   | |  | |   | (_| || (__ |   < |  __/| |   
\____/ |_| |_| |_|| .__/ |_| \___/  \__, | \___| \___|   \_/  |_|    \__,_| \___||_|\_\ \___||_|   
               | |                __/ |                                                         
               |_|               |___/                                                          

======================================================================================================

    `)
);

    runPrompt();
});
function  viewByDept() {
    conn.query(
        "SELECT first_name AS 'First Name', last_name AS 'Last Name', title AS 'Title', salary AS 'Salary', department_name AS 'Department Name' FROM employee INNER JOIN role ON employee.id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY department.department_name",
        function (err, res) {
    console.table(res);
    runPrompt();
    });
};

function viewDepartments() {
    conn.query("SELECT department_name AS 'Department Name', id AS 'ID' FROM department", function (err, res) {
    console.table(res);
    runPrompt();
    });
};

function viewRoles() {
    conn.query("SELECT DISTINCT title AS 'Title' FROM role", function (err, res) {
    console.table(res);
    runPrompt();
    });
};

function viewEmployees() {
    conn.query("SELECT first_name AS 'First Name', last_name AS 'Last Name' FROM employee", function (err, res) {
    console.table(res);
    runPrompt();
    });
};

function viewManagers() {
    conn.query("SELECT title AS 'Title', first_name AS 'First Name', last_name AS 'Last Name', manager_id AS 'Manager ID' FROM employee INNER JOIN role ON employee.id = role.id WHERE title = 'manager'", function (err, res) {
    console.table(res);
    runPrompt();
    });
};

function  viewByMgr() {
    inquirer.prompt({
        name: "manager_id",
        type: "input",
        message: "What manager's team do you want to view?"
    })
    .then((answer) => {
        const query = `SELECT manager_id AS 'Manager ID', title AS 'Title', first_name AS 'First Name', last_name AS 'Last Name', department_name AS 'Department Name' FROM employee INNER JOIN role ON employee.id = role.id INNER JOIN department ON role.department_id = department.id WHERE employee.manager_id = ${answer.manager_id}`;
        conn.query(query, { manager_id: answer.manager_id }, function (err, res) {
        console.table(res);
        runPrompt();
        });
    });
}

function viewBudget() {
    inquirer.prompt({
        name: "department_id",
        type: "input",
        message: "What department's budget do you want to view?"
    })
    .then((answer) => {
        const query = `SELECT ${answer.department_id}, department_name AS 'Department Name', SUM(role.salary) AS 'Total Department Budget' FROM role INNER JOIN department ON role.department_id = department.id WHERE department_id = ${answer.department_id};`;
        conn.query(query, { department_id: answer.department_id }, function (err, res) {
        console.table(res);
        runPrompt();
        });
    });
}

function  addDept() {
    inquirer.prompt({
        name: "department_name",
        type: "input",
        message: "What department would you like to add?"
    })
    .then((answer) => {
        const query = `INSERT INTO department (department_name) VALUES ("${answer.department_name}");`;
        conn.query(query, { department_name: answer.department_name }, function (err, res) {
        viewDepartments();
        });
    });
}

function addRoles() {
    inquirer.prompt({
        name: "title",
        type: "input",
        message: "What role would you like to add?"
    })
    .then((answer) => {
        const query = `INSERT INTO role (title) VALUES ("${answer.title}");`;
        conn.query(query, { title: answer.title }, function (err, res) {
        viewRoles();
        });
    });
}

function runPrompt() {
    inquirer.prompt({
        name: "action",
        type: "rawlist",
        message: "Welcome to HR's Best Friend - An Employee Tracker. What would you like to do today?",
        pageSize: 20,
        choices: [
        "View all employee info by department",
        "View departments",
        "View roles",
        "View employees",
        "View managers",
        "View employees by manager",
        "View total used budget of a department",
        "Add new departments",
        "Add employee roles"
        ]
    })
    .then((answer) => {
        switch (answer.action) {
        case "View all employee info by department":
            viewByDept();
            break;
        case "View departments":
            viewDepartments();
            break;
        case "View roles":
            viewRoles();
            break;
        case "View employees":
            viewEmployees();
            break;
        case "View managers":
            viewManagers();
            break;
        case "View employees by manager":
            viewByMgr();
            break;
        case "View the total utilized budget of a department":
            viewBudget();
            break;
        case "Add departments":
            addDept();
            break;
        case "Add roles":
            addRoles();
            break;
        }
    });
}