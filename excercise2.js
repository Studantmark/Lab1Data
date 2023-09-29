const myArray = [];


let AddTask = (task) => {
    myArray.push(task);
    console.log("Task " + task + " was inserted into array");
    console.log(myArray.length);
}

AddTask("Hello");
AddTask("Goodbye")
let ListAllTasks = () => {
    myArray.forEach((item) => {
        console.log(item);
    })
}

ListAllTasks();

//The delete task grabs the index of the passed string, 
let deleteTask = (task) => {
    let index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("Task " + task + " was deleted");
    } else {
        console.log("Task" + task + "not found in  tasks");
    }
    return myArray.length;
}

deleteTask("Hello");
deleteTask("Good day");