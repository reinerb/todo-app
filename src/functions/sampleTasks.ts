import { Task } from '../types/Task';
import { v4 as uuid } from 'uuid';

const sampleTask: Task = {
  id: uuid(),
  title: 'Add a task!',
  description: 'Click the "new task" button to add a new task.',
  due: new Date(),
  complete: false,
};

const sampleTaskTwo: Task = {
  id: uuid(),
  title: 'Mark a task as complete!',
  description: 'Click the checkbox next to a task to mark it as complete.',
  due: new Date(),
  complete: false,
};

const sampleTaskThree: Task = {
  id: uuid(),
  title: 'Edit a task!',
  description:
    'Click the edit button next to a task, or on its description, to edit its details.',
  due: new Date(),
  complete: false,
};

const sampleTaskFour: Task = {
  id: uuid(),
  title: 'Delete a task!',
  description: 'Click the delete button to delete tasks you no longer need.',
  due: new Date(),
  complete: false,
};

export const sampleTasks = [
  sampleTask,
  sampleTaskTwo,
  sampleTaskThree,
  sampleTaskFour,
];
