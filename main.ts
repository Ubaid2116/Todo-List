#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string[] = [];

console.log(
  chalk.bgMagentaBright.black.italic.bold(
    "\n\tWelcome to Muhammad-Ubaid - Todo-List Application\n"
  )
);

async function createTodo(todoList: string[]) {
  do {
    let result = await inquirer.prompt({
      name: "select",
      type: "list",
      message: chalk.greenBright.italic.bold("Select one operation"),
      choices: ["Add", "View", "Update", "Delete"],
    });

    if (result.select === "Add") {
      let addList = await inquirer.prompt({
        name: "task",
        type: "input",
        message: chalk.magentaBright.italic.bold("What task do you want to add?"),
      });
      todoList.push(addList.task);
      todoList.forEach((todo) => console.log(todo));
      console.log(chalk.bgBlueBright.bold.italic("\n\tTask added in ToDo List successfully!\n"));
    }
    if (result.select === "View") {
      console.log(chalk.bgRedBright.cyanBright.bold("\n\tTO DO LIST\n"));
      todoList.forEach((todo) => console.log(todo));
      console.log(chalk.bgBlueBright.bold.italic("\n\tTask added in ToDo List successfully!\n"));
    }
    if (result.select === "Update") {
      let updateList = await inquirer.prompt({
        name: "todo",
        type: "list",
        message: chalk.bold.magentaBright.italic.bold("Update task in the list"),
        choices: todoList.map((task) => task),
      });
      let addList = await inquirer.prompt({
        name: "task",
        type: "input",
        message: chalk.magentaBright.italic.bold("What task do you want to add?"),
      });
      let newTodo = todoList.filter((val) => val !== updateList.todo);
      todoList = [...newTodo, addList.task];
      todoList.forEach((todo) => console.log(todo));
      console.log(chalk.bgBlueBright.bold.italic("\n\tTask added in ToDo List successfully!\n"));
    }

    if (result.select === "Delete") {
      let deleteTodo = await inquirer.prompt({
        name: "delete",
        type: "list",
        message: chalk.redBright.bold.italic("Update task in the list"),
        choices: todoList.map((task) => task),
      });
      let newTodo = todoList.filter((val) => val !== deleteTodo.delete);
      todoList = [...newTodo];
      todoList.forEach((todo) => console.log(todo));
      console.log(chalk.bgBlueBright.bold.italic("\n\tTask added in ToDo List successfully!\n"));
    }
  } while (true);
}
createTodo(todoList);
