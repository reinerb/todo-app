import React from 'react';
import { useParams } from 'react-router-dom';
import { Task } from '../types/Task';
import TaskForm from './TaskForm';

interface Props {
  tasks: Task[];
  updateTasks: (task: Task) => void;
}

function EditTask(props: Props) {
  const { tasks, updateTasks } = props;
  const { taskId } = useParams();
  const task: Task = tasks.filter((task) => task.id === taskId)[0];

  return (
    <TaskForm
      task={task}
      updateTasks={updateTasks}
    />
  );
}

export default EditTask;
