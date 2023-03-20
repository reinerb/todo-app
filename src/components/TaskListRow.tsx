import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, Grid, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Task } from "../types/Task";

interface Props {
  key: string;
  task: Task;
  toggleComplete: (event: React.ChangeEvent) => void;
  deleteTask: (event: React.MouseEvent) => void;
}

function TaskListRow(props: Props) {
  const { task, toggleComplete, deleteTask } = props;

  return (
    <Grid
      width="full"
      templateColumns="auto 1fr auto auto auto"
      gap="1rem"
      alignItems="center"
    >
      <Checkbox
        id={task.id}
        aria-label="Mark complete"
        isChecked={task.complete}
        onChange={toggleComplete}
      />
      <Text>{task.title}</Text>
      <Text>Due: {task.due.toLocaleDateString()}</Text>
      <IconButton aria-label="Edit task" icon={<EditIcon />} />
      <IconButton
        id={task.id}
        aria-label="Delete task"
        icon={<DeleteIcon />}
        color="red.500"
        onClick={deleteTask}
      />
    </Grid>
  );
}

export default TaskListRow;
