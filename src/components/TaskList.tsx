import { Divider, VStack } from "@chakra-ui/react";
import React from "react";
import { Task } from "../types/Task";
import TaskListHeader from "./TaskListHeader";
import TaskListRow from "./TaskListRow";

interface Props {
  tasks: Task[];
  toggleComplete: (event: React.ChangeEvent) => void;
  deleteTask: (event: React.MouseEvent) => void;
}

function TaskList(props: Props) {
  const { tasks, toggleComplete, deleteTask } = props;

  return (
    <VStack w="full">
      <TaskListHeader />
      <Divider />
      {tasks.map((task: Task) => {
        return (
          <TaskListRow
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        );
      })}
    </VStack>
  );
}

export default TaskList;
