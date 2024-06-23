#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Studant {
    name;
    constructor(n) {
        this.name = n;
    }
    ;
}
;
class Person {
    studants = [];
    addStudant(obj) {
        this.studants.push(obj);
    }
    ;
}
;
const person = new Person();
const programStart = async (person) => {
    console.log(chalk.yellowBright("      \n\t********  WELCOME  **********\n\t    "));
    do {
        const ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: chalk.greenBright("Whom would you like to interact with?"),
            choices: ["staff", "studant", "exit"]
        });
        if (ans.select == "staff") {
            console.log(chalk.redBright("You approach the staff room. Please feel free to ask any qustion."));
        }
        else if (ans.select == "studant") {
            const ans = await inquirer.prompt({
                name: "studant",
                type: "input",
                message: chalk.greenBright("Enter the studant's name you wish to engage with:")
            });
            const studant = person.studants.find(val => val.name == ans.studant);
            if (!studant) {
                const name = new Studant(ans.studant);
                person.addStudant(name);
                console.log(chalk.yellow(`Hello i am ${name.name}. Nice to meet you!`));
                console.log(chalk.yellowBright("New stusant added"));
                console.log(chalk.yellow("Current studant list:"));
                console.log(person.studants);
            }
            else {
                console.log(chalk.yellowBright(`Hello i am ${studant.name}. Nice to see you again!`));
                console.log(chalk.yellowBright("Existing student list:"));
                console.log(person.studants);
            }
        }
        else if (ans.select == "exit") {
            console.log(chalk.redBright("Exiting the program..."));
            process.exit();
        }
    } while (true);
};
programStart(person);
