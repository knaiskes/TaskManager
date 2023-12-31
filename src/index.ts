import Task from './interfaces/Task';
import TaskManager from './controllers/TaskManagerController';

const taskManager = new TaskManager();

// Add some tasks
taskManager.addTask('task1');
taskManager.addTask('task2');
taskManager.addTask('task3');

// Update a task
taskManager.updateTask(1, 'updateTask1');

// Delete a task
taskManager.deleteTask(3);

// Complete a task
taskManager.completeTask(2);

const tasks = taskManager.getAllTasks();

// Print all tasks
taskManager.printTasks(tasks);
