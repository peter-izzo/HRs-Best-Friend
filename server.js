//Dependencies
const sql = require("mysql");
const inquirer = require("inquirer");
const table = require("console.tables");
const chalk = require("chalk");

const employee = require('./constructors/employee');
const department = require('./constructors/department');
const role = require('./constructors/role');

let managerArray = [];
let roleArray = [];
let deptArray = [];
let employeeIDArray = [];
let employeeFirstNameArray = [];
let managerIDArray = [];
let roleIDArray = [];

const index = [
    {
        type: 'rawlist',
        message: 'What would you like to do?',
        name: 'query',
        choices: [
            'View All Employees',
            'View All Employees By Department',
            'View all Employees By Manager',
            'Add Employee',
            'Remove Employee',
            'Update Employee Role',
            'Update Employee Manager',
            'View All Roles',
            'Add Role',
            'Remove Role',
            'View All Departments',
            'Add Department',
            'Remove Department',
            'View Total Utilized Budget of Department',
            'Exit Application',
        ],
    },
];

const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Neverm0re!',
    database: 'Employee_Tracker'
});

conn.connect(function (err) {
    if(err) throw err;
    startApp();
    buildManagerArry();
    buildRoleArray();
    buildDeptArray();
    buildEmployeeIDArray();
    buildEmployeeFirstNameArray();
    ManagerWithID();
    RoleWithID();
});

function start(){
    console.log(
        chalk.cyanBright(`
        
======================================================================================================================================================
____                             ___                                                     ______                             __                        
/\  _`\                          /\_ \                                                   /\__  _\                           /\\                       
\ \ \L\_\    ___ ___     _____   \//\ \      ___    __  __       __      __              \/_/\ \/   _ __     __       ___   \ \ \/'\       __    ___  
 \ \  _\L  /' __` __`\  /\ '__`\   \ \ \    / __`\ /\ \/\ \    /'__`\  /'__`\               \ \ \  /\`'__\ /'__`\    /'___\  \ \ , <     /'__`\ \`'__\
  \ \ \L\ \/\ \/\ \/\ \ \ \ \L\ \   \_\ \_ /\ \L\ \\ \ \_\ \  /\  __/ /\  __/                \ \ \ \ \ \/ /\ \L\.\_ /\ \__/   \ \ \\`\  /\  __/ \ \\/ 
   \ \____/\ \_\ \_\ \_\ \ \ ,__/   /\____\\ \____/ \/`____ \ \ \____\\ \____\                \ \_\ \ \_\ \ \__/.\_\\ \____\   \ \_\ \_\\ \____\ \\_\ 
    \/___/  \/_/\/_/\/_/  \ \ \/    \/____/ \/___/   `/___/> \ \/____/ \/____/                 \/_/  \/_/  \/__/\/_/ \/____/    \/_/\/_/ \/____/  \_/ 
                           \ \_\                        \___/                                                                                         
                            \/_/                        \__/                                                                                          

======================================================================================================================================================




        `)
    );
    inquirer.prompt(index).then(function(data) {
        const introQ = data.query;
        switch (introQ) {
            case 'View All Employees':
                func1();
                break;
            case 'View All Employees By Department':
                func2();
                break;
            case 'View All Employees By Manager':
                func3();
                break;
            case 'Add Employee':
                func4();
                break;
            case 'Remove Employee':
                func5();
                break;
            case 'Update Employee Role':
                func6();
                break;
            case 'Update Employee Manager':
                func7();
                break;
            case 'View All Roles':
                func8();
                break;
            case 'Add Role':
                func9();
                break;
            case 'Remove Role':
                func10();
                break;
            case 'View All Departments':
                func11();
                break;
            case 'Add Department':
                func12();
                break;
            case 'Remove Department':
                func13();
                break;
            case 'View Total Utalized Budget Of A Department':
                func14();
                break;   
            default:
                func15();
                break;
        }
    });
}

function func1() {
    const query = 
    `
    SELECT e.id AS employee_id, e.first_name, e.last_name, d.name AS department_name, r.title AS job_title, r.salary, CONCAT(x.first_name, " ", x.last_name) AS manager_name 
    FROM employee e
    LEFT JOIN role r
    ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee x
    ON e.manager_id = x.id
    `;
    connection.query(query, function(err, res) {
        if(err) throw err;
        console.log(`
        
        `);
        console.log(res);
        reRun();
    })
};

function func2() {
    const query = `SELECT name FROM department`;
    connection.query(query, function (err, res) {
        if(err) throw err;
        inquirer.prompt({
            name: 'deptChoice',
            type: 'list',
            message: 'What department would you like o view all of the employees of?',
            choices: deptArray,
        })
        .then(function (answer) {
            const query2 = 
            `
            SELECT e.id AS employee_id, e.first_name, e.last_name, d.name AS department_name, r.title AS job_title, r.salary, CONCAT(x.first_name, " ", x.last_name) AS manager_name 
            FROM employee e
            LEFT JOIN role r
            ON e.role_id = r.id
            LEFT JOIN department d
            ON d.id = r.department_id
            LEFT JOIN employee x
            ON e.manager_id = x.id
            WHERE name = ?
            `;
            connection.query(query2, [answer.deptChoice], function(err, res) {
                if(err) throw err;
                console.log('\n');
                console.log(res);
                reRun();
            });
        });
    });
};

function func3() {
    const query = 
    `
    SELECT DISTINCT CONCAT(x.first_name, " ", x.last_name) AS manager_name 
    FROM employee e
    INNER JOIN employee x
    ON e.manager_id = x.id
    `;
    connection.query(query, function (err,res) {
        if(err) throw err;
        inquirer.prompt({
            name: 'managerChoices',
            type: 'list',
            message: 'Which managers employees would you like to view?',
            choices: managerArray,
        })
        .then(function (answer) {
            const query2 = 
            `
            SELECT e.id AS employee_id, e.first_name, e.last_name, d.name AS department_name, r.title AS job_title, r.salary, CONCAT(x.first_name, " ", x.last_name) AS manager_name 
            FROM employee e
            LEFT JOIN role r
            ON e.role_id = r.id
            LEFT JOIN department d
            ON d.id = r.department_id
            LEFT JOIN employee x
            ON e.manager_id = x.id
            HAVING manager_name = ?
            `;
            connection.query(query2, [answer.managerChoices], function (err, res) {
                if(err) throw err;
                console.log(`
                
                `);
                console.table(res);
                reRun();
            })
        })
    })
};

function func4() {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'What is the first name of the employee you would like to add?',
            validate: function (item) {
                letters = /^[A-Za-z]+$/.test(item);
                if(letters){
                    return true;
                }else {
                    console.log(chalk.redBright(`Invalid Submission! Please submit only letters. Please re-submit using only letters`));
                    return false;
                }
            },
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'What is the employees last name?',
            validate: function (item) {
                letters = /^[A-Za-z]+$/.test(item);
                if(letters){
                    return true;
                } else {
                    console.log(chalk.redBright(`Invalid Submission! Please submit only letters. Please re-submit using only letters`));
                    return false;
                }
            },
        },
        {
            name: 'role',
            type: 'list',
            message: 'What is this employees job title?',
            choices: roleArray,
        },
        {
            name: 'manager',
            type: 'list',
            message: 'Who is this employees manager?',
            choices: managerArray,
        },
    ])
    .then(function (answer) {
        let employeeFirstName = answer.first_name;
        let employeeLastName = answer.last_name;

        function FindRoleID() {
            for (let i = 0; i < roleIDArray.length; i++) {
                if (roleIDArray[i].title === answer.role) {
                    return roleIDArray[i].id;
                }
            }
        }
        function FindManagerID() {
            for (let q = 0; q < managerIDArray.length; q++) {
                if (managerIDArray[q].manager_name === answer.manager_name) {
                    return managerIDArray[q].manager_id;
                }
            }
        }
        let employeeRole = FindRoleID();
        let employeeManager = FindManagerID();

        console.log(chalk.greenBright(`
			=================================================================================================
			Adding New Employee ${employeeFirstName} ${employeeLastName} to Database!
			=================================================================================================
            `));
            console.log(chalk.greenBright(`
			=================================================================================================
			SUCCESS!
			=================================================================================================
            `));
            let addnewEmployee = new employee(employeeFirstName, employeeLastName, employeeRole, employeeManager);
            connection.query('INSERT INTO employee SET ?', addnewEmployee, function (err, res) {
				if (err) throw err;
			});
            reRun();
    })

};

function func5() {

};

function func6() {

};

function func7() {

};

function func8() {

};

function func9() {

};

function func10() {

};

function func11() {

};

function func12() {

};

function func13() {

};

function func14() {

};

function func15() {

};

