import * as React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import TaskListRow from "./components/TaskListRow";

import { Task } from "./types/Task";

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

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {tasks.map((task: Task) => {
                return (
                  <TaskListRow
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                  />
                );
              })}
            </>
          }
        />
        <Route path="/new" />
        <Route path=":taskId" />
        <Route path=":taskId/edit" />
      </Routes>
    </ChakraProvider>
  );
};
