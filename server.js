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
/\  _`\                          /\_ \                                                   /\__  _\                           /\ \                       
\ \ \L\_\    ___ ___     _____   \//\ \      ___    __  __       __      __              \/_/\ \/   _ __     __       ___   \ \ \/'\       __    _ __  
 \ \  _\L  /' __` __`\  /\ '__`\   \ \ \    / __`\ /\ \/\ \    /'__`\  /'__`\               \ \ \  /\`'__\ /'__`\    /'___\  \ \ , <     /'__`\ /\`'__\
  \ \ \L\ \/\ \/\ \/\ \ \ \ \L\ \   \_\ \_ /\ \L\ \\ \ \_\ \  /\  __/ /\  __/                \ \ \ \ \ \/ /\ \L\.\_ /\ \__/   \ \ \\`\  /\  __/ \ \ \/ 
   \ \____/\ \_\ \_\ \_\ \ \ ,__/   /\____\\ \____/ \/`____ \ \ \____\\ \____\                \ \_\ \ \_\ \ \__/.\_\\ \____\   \ \_\ \_\\ \____\ \ \_\ 
    \/___/  \/_/\/_/\/_/  \ \ \/    \/____/ \/___/   `/___/> \ \/____/ \/____/                 \/_/  \/_/  \/__/\/_/ \/____/    \/_/\/_/ \/____/  \/_/ 
                           \ \_\                        /\___/                                                                                         
                            \/_/                        \/__/                                                                                          

======================================================================================================================================================




        `)
    );
    inquirer.prompt(index).then(function(data) {
        const introQ = data.query;
    })
}
