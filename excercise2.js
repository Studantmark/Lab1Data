const myArray = [];

//adding tasks and outputing the length using the .length
let AddTask = (task) => {
    myArray.push(task);
    console.log("Task " + task + " was inserted into array");
    console.log(myArray.length);
}

AddTask("Hello");
AddTask("Goodbye");
//listing the array with the foreach function
let ListAllTasks = () => {
    myArray.forEach((item) => {
        console.log(item);
    })
}

ListAllTasks();

//The delete task grabs the index of the passed string, and if it is present it is deleted if its not present it a message saying its not found is posted
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