import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let add_task = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: " What you want to add in your todos? "
        },
        {
            name: "add_more",
            type: "confirm",
            message: " Do you want to add more?",
            default: "false "
        }
    ]);
    todos.push(add_task.todo);
    condition = add_task.add_more;
    console.log(todos);
}
