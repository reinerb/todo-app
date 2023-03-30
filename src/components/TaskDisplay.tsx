import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import React from 'react';
import { Task } from '../types/Task';
import { daysUntil } from '../functions/daysUntil';
import { FaArrowLeft } from 'react-icons/fa';

interface Props {
  tasks: Task[];
  deleteTask: (event: React.MouseEvent) => void;
}

function TaskDisplay(props: Props) {
  const { tasks, deleteTask } = props;
  const { taskId } = useParams();
  const task: Task = tasks.filter((task) => task.id === taskId)[0];
  const navigate = useNavigate();

  const daysUntilDue = daysUntil(task.due);

  const handleDelete = (event: React.MouseEvent) => {
    deleteTask(event);
    navigate('/');
  };

  return (
    <VStack
      w='full'
      align='start'
      gap={3}
    >
      <HStack
        w='full'
        justifyContent='space-between'
      >
        <Heading>{task.title}</Heading>
        <HStack>
          <RouterLink to={`/${task.id}/edit`}>
            <Button aria-label={'edit-task'}>Edit</Button>
          </RouterLink>
          <Button
            id={taskId}
            aria-label='Delete task'
            colorScheme='red'
            onClick={handleDelete}
          >
            Delete
          </Button>
        </HStack>
      </HStack>
      <Text
        w='full'
        size='md'
        color={daysUntilDue < 0 ? 'red' : 'default'}
      >{`Due: ${task.due.toLocaleDateString()} (in ${daysUntilDue} day${
        daysUntilDue === 1 ? '' : 's'
      })`}</Text>
      <Text
        w='full'
        align='start'
      >
        {task.description}
      </Text>
      <RouterLink to='/'>
        <Button leftIcon={<FaArrowLeft />}>Back to home</Button>
      </RouterLink>
    </VStack>
  );
}

export default TaskDisplay;
