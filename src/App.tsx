import * as React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Task } from './types/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDisplay from './components/TaskDisplay';
import EditTask from './components/EditTask';

const sampleTask: Task = {
  id: uuid(),
  title: 'Do things',
  description: 'Lorem ipsum dolor sit amet',
  due: new Date(),
  complete: false,
};
const sampleTaskTwo: Task = {
  id: uuid(),
  title: 'Do other things',
  description: 'Hi this is interesting',
  due: new Date(),
  complete: true,
};

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([sampleTask, sampleTaskTwo]);

  // Updates the task list
  // If a task with the given ID exists, replace it
  // If not, add a new task
  const updateTasks = (newTask: Task) => {
    let updated = false;
    const updatedTasks = tasks.map((task: Task) => {
      if (task.id === newTask.id) {
        updated = true;
        return newTask;
      } else {
        return task;
      }
    });

    setTasks(updated ? updatedTasks : [...tasks, newTask]);
  };

  // Toggles the completeness of the task with the same ID as the given event
  const toggleComplete = (e: React.ChangeEvent) => {
    const updatedTasks = tasks.map((task: Task) =>
      task.id === e.target.id ? { ...task, complete: !task.complete } : task
    );
    setTasks(updatedTasks);
  };

  // Deletes the task with the same ID as the given event
  const deleteTask = (e: React.MouseEvent) => {
    const updatedTasks = tasks.filter(
      (task: Task) => task.id !== (e.target as HTMLButtonElement).id
    );
    setTasks(updatedTasks);
  };

  return (
    <ChakraProvider theme={theme}>
      <Container
        maxW='container.lg'
        py={10}
      >
        <Routes>
          <Route
            path='/'
            element={
              <TaskList
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            }
          />
          <Route
            path='/new'
            element={
              <TaskForm
                task={{
                  id: uuid(),
                  title: '',
                  description: '',
                  due: new Date(),
                  complete: false,
                }}
                updateTasks={updateTasks}
              />
            }
          />
          <Route path='/:taskId'>
            <Route
              index
              element={
                <TaskDisplay
                  tasks={tasks}
                  deleteTask={deleteTask}
                />
              }
            />
            <Route
              path='edit'
              element={
                <EditTask
                  tasks={tasks}
                  updateTasks={updateTasks}
                />
              }
            />
          </Route>
          <Route
            path='*'
            element={<Navigate to={'/'} />}
          />
        </Routes>
      </Container>
    </ChakraProvider>
  );
};
