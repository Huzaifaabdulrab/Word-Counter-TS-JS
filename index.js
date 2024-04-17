#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Initialize the operation flag to false to enter the loop
let operation = false;
// Loop until operation becomes true
while (!operation) {
    // Prompt the user to enter a sentence
    const answer = await inquirer.prompt({
        name: "sentence",
        type: "input",
        message: chalk.cyan(`Enter your Sentence to count the number`)
    });
    // Get the sentence entered by the user
    const sentence = answer.sentence;
    // Check if the user entered a sentence
    if (!sentence) {
        // If no sentence is entered, display an error message
        console.log(chalk.redBright("\nError: Please enter a sentence."));
    }
    else {
        // If a sentence is entered, split it into words
        const wordArray = sentence.trim().split(" ");
        // Display the words in the sentence
        console.log();
        console.log(wordArray);
        // Display the count of words in the sentence
        console.log(chalk.yellow(`\nYour sentence word count is ${wordArray.length}`));
        // Set operation to true to exit the loop
        operation = true;
    }
}
