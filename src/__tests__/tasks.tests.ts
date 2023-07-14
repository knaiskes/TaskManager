import TaskManager from '../controllers/TaskManagerController';

describe('TaskManager', () => {
    let taskManager: TaskManager;

    beforeEach(() => {
	taskManager = new TaskManager();
    });

    it('should add a task', () => {
	taskManager.addTask('Task 1');
	expect(taskManager.getAllTasks()).toHaveLength(1);
    });

    it('should update a task', () => {
	taskManager.addTask('Task 1');
	taskManager.updateTask(1, 'Updated Task 1');
	const task = taskManager.getTaskById(1);
	expect(task?.description).toBe('Updated Task 1');
    });

    it('should delete a task', () => {
	taskManager.addTask('Task 1');
	taskManager.deleteTask(1);
	expect(taskManager.getAllTasks()).toHaveLength(0);
    });

    it('should complete a task', () => {
	taskManager.addTask('Task 1');
	const task = taskManager.getTaskById(1);
	taskManager.completeTask(task?.id ?? 1);
	expect(task?.completed).toBe(true);
    });
});
