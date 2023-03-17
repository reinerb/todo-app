import * as React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ChakraProvider, Container, Heading, theme } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";

import { Task } from "./types/Task";
import TaskList from "./components/TaskList";

const sampleTask: Task = {
  id: uuid(),
  title: "Do things",
  description: "Lorem ipsum dolor sit amet",
  complete: false,
};
const sampleTaskTwo: Task = {
  id: uuid(),
  title: "Do other things",
  description: "Hi this is interesting",
  complete: true,
};

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([sampleTask, sampleTaskTwo]);

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
      <Container maxW="container.lg" py={10}>
        <Routes>
          <Route
            path="/"
            element={
              <TaskList
                tasks={tasks}
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            }
          />
          <Route path="/new" element={<Heading>New Task</Heading>} />
          <Route path=":taskId" element={<Heading>Task Page</Heading>} />
          <Route path=":taskId/edit" />
          <Route path="*" />
        </Routes>
      </Container>
    </ChakraProvider>
  );
};
