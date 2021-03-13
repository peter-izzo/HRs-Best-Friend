use employee_Tracker;

INSERT INTO department (department_name) values ("Software Solutions");
INSERT INTO department (department_name) values ("Bosses");
INSERT INTO department (department_name) values ("HR");
INSERT INTO department (department_name) values ("Front Office");
INSERT INTO department (department_name) values ("Marketing");
INSERT INTO department (department_name) values ("Operations");


INSERT INTO role (title, salary, department_id) values ("Engineer", 1000000, 1);
INSERT INTO role (title, salary, department_id) values ("Engineer", 1000000, 2);
INSERT INTO role (title, salary, department_id) values ("Engineer", 1000000, 3);
INSERT INTO role (title, salary, department_id) values ("Engineer", 1000000, 4);
INSERT INTO role (title, salary, department_id) values ("Engineer", 1000000, 5);
INSERT INTO role (title, salary, department_id) values ("Engineer", 1000000, 6);
INSERT INTO role (title, salary, department_id) values ("Manager", 500000, 1);
INSERT INTO role (title, salary, department_id) values ("Manager", 500000, 2);
INSERT INTO role (title, salary, department_id) values ("Manager", 500000, 3);
INSERT INTO role (title, salary, department_id) values ("Manager", 500000, 4);
INSERT INTO role (title, salary, department_id) values ("Manager", 500000, 5);
INSERT INTO role (title, salary, department_id) values ("Manager", 500000, 6);
INSERT INTO role (title, salary, department_id) values ("Programmer", 250000, 1);
INSERT INTO role (title, salary, department_id) values ("Programmer", 250000, 2);
INSERT INTO role (title, salary, department_id) values ("Programmer", 250000, 3);
INSERT INTO role (title, salary, department_id) values ("Programmer", 250000, 4);
INSERT INTO role (title, salary, department_id) values ("Programmer", 250000, 5);
INSERT INTO role (title, salary, department_id) values ("Programmer", 250000, 6);
INSERT INTO role (title, salary, department_id) values ("Associate", 125000, 1);
INSERT INTO role (title, salary, department_id) values ("Associate", 125000, 2);
INSERT INTO role (title, salary, department_id) values ("Associate", 125000, 3);
INSERT INTO role (title, salary, department_id) values ("Associate", 125000, 4);
INSERT INTO role (title, salary, department_id) values ("Associate", 125000, 5);
INSERT INTO role (title, salary, department_id) values ("Associate", 125000, 6);
INSERT INTO role (title, salary, department_id) values ("Intern", 1000, 1);
INSERT INTO role (title, salary, department_id) values ("Intern", 1000, 2);
INSERT INTO role (title, salary, department_id) values ("Intern", 1000, 3);
INSERT INTO role (title, salary, department_id) values ("Intern", 1000, 4);
INSERT INTO role (title, salary, department_id) values ("Intern", 1000, 5);
INSERT INTO role (title, salary, department_id) values ("Intern", 1000, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Pete", "Izzo", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Mark", "Cuban", 2, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("John", "Bonham", 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Bilbo", "Baggins", 4, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Phineus", "Char", 5, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Ferb", "Char", 1, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Ted", "Benneke", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Bill", "Burr", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Scrouge", "McDuck", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Marko", "Pollo", 5, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Shim", "Jackbert", 1, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Nicholas", "Johnson", 2, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Django", "Buckwater", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Vlad", "Tepesh", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Mr", "Yukihamma", 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Kim", "Chi", 1, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Sarah", "Hyland", 2, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Black", "Jumbo", 3, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Sansa", "Smith", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Turkey", "Giblette", 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Norman", "Rockwell", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Salvatore", "Giulianno", 2, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Chika", "Bonneeta", 3, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Stacy", "Kiebler", 4, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Phil", "Specter", 5, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Tiny", "Dansir", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Jack", "Black", 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Billy", "Corgan", 3, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Roberto", "Benini", 4, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Gene", "Hackman", 5, 6);


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;