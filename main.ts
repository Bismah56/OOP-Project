#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//                                                      OOP console Project

//Creating a class for a person's personality
class Person{
    personality : string;

    constructor(){
        this.personality = "";
    };

    //Method for updating the value of personality in accordance with user's answer
    updatePersonality(answer:string){
        if (answer==="You like to be out and about, attending social events and engaging with others") {
            this.personality = "of an Extrovert";
        }
        else if(answer==="You're happy spending time alone or with one or two people you feel close to"){
            this.personality = "of an Introvert";
        }
        else if(answer==="You adapt to different situations, enjoy both socialising and being alone"){
            this.personality = "of an Ambivert";
        }
        else{
            this.personality = "still a mystery";
        }
    };

    //Method for accessing personality
    getPersonality(){
        return this.personality;
    };
};

//Using Inheritance
class User extends Person{
    name : string;
    age : number;

    constructor(Name:string,Age:number){
        super();            //Invoking the parent class (Person) constructor
        this.name = Name;
        this.age = Age;
    };

};

async function main() {
    console.log("=".repeat(37));
    console.log("\tOOP console Project");
    console.log("=".repeat(37));

    let user = await inquirer.prompt([
        {
            name : "name",
            type : "input",
            message : chalk.magentaBright("\nWhat is your name? \n")
        }, 
        {
            name : "age",
            type : "number",
            message : chalk.magentaBright("\nWhat is your age? \n")
        },
        {
            name : "liking",
            type : "list",
            message : chalk.magentaBright("\nChoose an option to know about your personality:\n"),
            choices : [
                "You like to be out and about, attending social events and engaging with others",
                "You're happy spending time alone or with one or two people you feel close to",
                "You adapt to different situations, enjoy both socialising and being alone",
                "Not really sure about any of this"
            ]
        }
    ]);

    //Object created with the class template
    let myUser = new User(user.name,user.age);

    //accessing updatePersonality method
    myUser.updatePersonality(user.liking);

    //Printing the users name & personality
    console.log(chalk.bold.magentaBright(`\n\tGreat!\n`));
    console.log(chalk.yellowBright(`Your name is: ${chalk.greenBright(myUser.name)}`));
    console.log(chalk.yellowBright("Your age is:"),chalk.greenBright(`${myUser.age} years`));
    console.log(chalk.yellowBright(`Your personality type is ${chalk.greenBright(myUser.getPersonality())}`));
    
};
//Invoking the main function
main();
