#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlueBright("\n \t CURRENCY CONVERTOR APPLICATION\n"));


// define the list of currencies and their exchange rates 

let exchange_rate: any = {
    "USD": 1,     // Base currency 
    "EUR": 0.9,   // European currency (Euro)
    "JYP": 113,    // Japenese currency (Yen)
    "CAD": 1.3,    // Candian Dollar
    "AUD": 1.65,   // Australian Dollar
    "PKR": 277.70,  // Pakistani rupees

  // Add more currencies and their exchange rates here   
}
 // Prompt the user to select currencies to convert from and to 
 
 let user_answer = await inquirer.prompt(
    [
        {
            name: "from_currency",
            type: "list",
            message: chalk.red("Select the currency to convert from:"),
            choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
        },
        {
           name: "to_currency",
           type: "list",
           message: chalk.red("Select the currency to convert into:"),
           choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
        },
        {
            name:"amount",
            type: "input",
            message: chalk.red("Enter the amount to convert:")
        }
    ]
 );

 // perform currency conversion by using formula 

 let from_amount = exchange_rate[user_answer.from_currency];
 let to_amount = exchange_rate[user_answer.to_currency];
 let amount= user_answer.amount

 // formula of conversion 

 let base_amount = amount / from_amount
 let converted_amount = base_amount * to_amount

 //  display the converted amount 

  console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(0))}`);
