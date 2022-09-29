const Manager = require('./lib/Manager')
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the manager?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the manager?'
        }, 
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number of the manager?'
        }
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(manager);
    })