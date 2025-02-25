let tasks = [
  { id: 1, title: "Complete assignment", completed: false },
  { id: 2, title: "Attend meeting", completed: true },
];

function addTask(tasks, newTask, callback) {
  tasks.push(newTask);9

  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  const summary = {
    total: total,
    completed: completed,
    pending: pending,
  };

  callback(tasks, summary);
}

addTask(
  tasks,
  { id: 4, title: "Start project", completed: true },
  (updatedTasks, summary) => {
    console.log("Updated Task List:", updatedTasks);
    console.log("Summary:", summary);
  }
);
