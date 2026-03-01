// This array will store all the tasks entered by the user
let initialTasks = [];

// Function to create and add a new task

function addTask() {
  // Get task information from the user
  let title = prompt("Enter task title:");
  let description = prompt("Enter task description:");
  let status = prompt("Enter task status (todo, doing, done):");

  // Make sure the status is always lowercase for consistency
  status = status.toLowerCase();

 // Keep asking until the user enters a valid status
  while (status !== "todo" && status !== "doing" && status !== "done") {
    alert("Invalid status! Please enter: todo, doing, or done.");
    status = prompt("Enter task status (todo, doing, done):").toLowerCase();
  }

   // Build the task object with a unique ID
  let newTask = {
    id: initialTasks.length + 1,
    title: title,
    description: description,
    status: status
  };

  // Add the new task to the task list
  initialTasks.push(newTask);
}

// STEP 1 – Keep Adding Tasks Until There Are 6
while (initialTasks.length < 6) {
  addTask();
}

// Alert when board is full
if (initialTasks.length === 6) {
  alert("Board is full! You now have 6 tasks.");
}

// Function: getCompletedTasks
function getCompletedTasks() {
  return initialTasks.filter(function(task) {
    return task.status === "done";
  });
}

// Display Results
console.log("All tasks:", initialTasks);
console.log("Completed tasks:", getCompletedTasks());



