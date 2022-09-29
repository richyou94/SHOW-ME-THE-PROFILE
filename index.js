const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')
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
        selectTeam();
    })

    function selectTeam() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'teamChoice',
                    message: 'Do you want to add team member? If not, choose "Done" to end the prompt.',
                    choices: ['Engineer', 'Intern', 'Done']
                }
            ])
            .then((answer) => {
                switch(answer.teamChoice) {
                    case 'Engineer':
                        return addEngineer();
                    break;
                    case 'Intern':
                        return addIntern();
                    break;
                    default:
                        return console.log('Done')
                }
            })
    }

    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of engineer?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the id of engineer?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of engineer?'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the github username of engineer?'
                }
            ])
            .then((answer) => {
                const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
                console.log(engineer);
                selectTeam();
            })
    }

    function addIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of intern?'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the id of intern?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of intern?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is the school of intern?'
                }
            ])
            .then((answer) => {
                const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
                console.log(intern);
                selectTeam();
            })
    }