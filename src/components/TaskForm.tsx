import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Input,
  SimpleGrid,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Task } from '../types/Task';

interface Props {
  task: Task;
  updateTasks: (task: Task) => void;
}

function TaskForm(props: Props) {
  const { task, updateTasks } = props;
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [due, setDue] = useState(task.due);

  const navigate = useNavigate();

  // Goes back to the previous page after pressing cancel
  const goBack = () => navigate(-1);

  // Handles form submission by making a new task
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(due);
    const newTask = {
      id: task.id,
      title,
      description,
      due,
      complete: task.complete,
    };

    updateTasks(newTask);

    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <SimpleGrid
        w='full'
        columns={2}
        columnGap={3}
        rowGap={3}
      >
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel>Due Date</FormLabel>
            <Input
              type='date'
              value={due.toISOString().substring(0, 10)}
              onChange={(event) => {
                const value = event.target.value.split('-');
                const date = new Date(
                  parseInt(value[0]),
                  parseInt(value[1]) - 1,
                  parseInt(value[2]),
                  due.getHours(),
                  due.getMinutes(),
                  due.getSeconds()
                );
                console.log(date);
                setDue(date);
              }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </FormControl>
        </GridItem>
        <GridItem
          colSpan={1}
          colStart={2}
          justifySelf='end'
        >
          <HStack>
            <Button
              variant='outline'
              onClick={goBack}
            >
              Cancel
            </Button>
            <Button type='submit'>Submit</Button>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </form>
  );
}

export default TaskForm;
