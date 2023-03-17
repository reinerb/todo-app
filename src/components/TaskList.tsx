import { Divider, VStack } from "@chakra-ui/react";
import React from "react";
import { Task } from "../types/Task";
import TaskListHeader from "./TaskListHeader";
import TaskListRow from "./TaskListRow";

interface Props {
  tasks: Task[];
  toggleComplete: (event: React.ChangeEvent) => void;
}

function TaskList(props: Props) {
  const { tasks, toggleComplete } = props;

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
          />
        );
      })}
    </VStack>
  );
}

export default TaskList;
