import { Button, Checkbox, Grid, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { Task } from '../types/Task';

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
      width='full'
      templateColumns='auto 1fr auto auto auto'
      gap='1rem'
      alignItems='center'
    >
      <Checkbox
        id={task.id}
        aria-label='Mark complete'
        isChecked={task.complete}
        onChange={toggleComplete}
      />
      <RouterLink to={`/${task.id}`}>
        <Text>{task.title}</Text>
      </RouterLink>
      <Text>Due: {task.due.toLocaleDateString()}</Text>
      <RouterLink to={`/${task.id}/edit`}>
        <Button aria-label={'edit-task'}>Edit</Button>
      </RouterLink>
      <Button
        id={task.id}
        aria-label='Delete task'
        colorScheme='red'
        onClick={deleteTask}
      >
        Delete
      </Button>
    </Grid>
  );
}

export default TaskListRow;
