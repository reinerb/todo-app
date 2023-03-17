import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { Checkbox, Grid, IconButton, Text } from "@chakra-ui/react";
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
    <Grid
      width="full"
      templateColumns="auto 1fr auto auto"
      gap="1rem"
      alignItems="center"
    >
      <Checkbox
        id={task.id}
        aria-label="Mark complete"
        isChecked={task.complete}
        onChange={toggleComplete}
      />
      <Text> {task.title}</Text>
      <IconButton aria-label="Edit task" icon={<EditIcon />} />
      <IconButton
        aria-label="Delete task"
        icon={<DeleteIcon />}
        color="red.500"
      />
    </Grid>
  );
}

export default TaskListRow;
