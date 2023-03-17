import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Task } from "../types/Task";

interface Props {
  key: string;
  task: Task;
  toggleComplete: (event: React.ChangeEvent) => void;
}

function TaskListRow(props: Props) {
  const { task, toggleComplete } = props;

  return (
    <HStack>
      <Checkbox
        id={task.id}
        aria-label="Mark complete"
        isChecked={task.complete}
        onChange={toggleComplete}
      >
        {task.title}
      </Checkbox>
      <IconButton aria-label="Edit task" icon={<EditIcon />} />
      <IconButton aria-label="Delete task" icon={<DeleteIcon />} />
    </HStack>
  );
}

export default TaskListRow;
