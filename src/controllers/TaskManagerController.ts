import Task from '../interfaces/Task';

class TaskManager {
    private tasks: Task[];

    constructor() {
	this.tasks = [];
    }

    addTask(description: string) {
	const id = this.tasks.length + 1;
	const task: Task = { id, description, completed: false };
	this.tasks.push(task);
	console.log(`A new task has been added with id ${id} and description: ${description}`);
    }

    updateTask(id: number, description: string){
	const task = this.getTaskById(id);
	if (task) {
	    task.description = description;
	    console.log(`Task with ${id} has been updated`);
	} else {
	    console.log(`Task with ${id} does not exist`);
	}
    }

    deleteTask(id: number) {
	const index = this.tasks.findIndex((task) => task.id === id);
	if (index !== -1) {
	    const task = this.tasks[index];
	    this.tasks.splice(index, 1);
	    console.log(`Task with ${id} has successfully been deleted`);
	} else {
	    console.log(`Task with ${id} does not exist`);
	}
    }

    getTaskById(id: number): Task | undefined {
	return this.tasks.find((task) => task.id === id);
    }

    getAllTasks(): Task[] {
	return this.tasks;
    }

    completeTask(id: number) {
	const task = this.getTaskById(id);
	if(!task) {
	    console.log('Task with ${id} does not exist');
	} else {
	    task.completed = true;
	}
    }

    printTasks(tasks: Task[]) {
	console.log('-----------------------------------');
	tasks.map(task => {
	    console.log(`id: ${task.id} | description: ${task.description} | completed: ${task.completed}`);
	});
	console.log('-----------------------------------');
    }
}

export default TaskManager;
