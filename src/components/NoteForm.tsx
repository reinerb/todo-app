import {
  Button,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Input,
  SimpleGrid,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Task } from "../types/Task";

interface Props {
  task: Task;
  updateTasks: (task: Task) => void;
}

function NoteForm(props: Props) {
  const { task, updateTasks } = props;
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [due, setDue] = useState(task.due);

  const navigate = useNavigate();

  // Handles form submission by making a new task
  const handleSubmit = () => {
    const newTask = {
      id: task.id,
      title,
      description,
      due,
      complete: task.complete,
    };

    updateTasks(newTask);

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <SimpleGrid w="full" columns={2} columnGap={3} rowGap={3}>
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
              type="date"
              value={due.toISOString().substring(0, 10)}
              onChange={(event) => setDue(new Date(event.target.value))}
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
        <GridItem colSpan={1} colStart={2} justifySelf="end">
          <HStack>
            <RouterLink to="..">
              <Button variant="outline">Cancel</Button>
            </RouterLink>
            <Button type="submit">Submit</Button>
          </HStack>
        </GridItem>
      </SimpleGrid>
    </form>
  );
}

export default NoteForm;
