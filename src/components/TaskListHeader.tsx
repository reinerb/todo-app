import { Button, Heading, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

interface Props {}

function TaskListHeader(props: Props) {
  const {} = props;

  return (
    <HStack w="full" justifyContent="space-between">
      <Heading>To-Do List</Heading>
      <RouterLink to="/new">
        <Button>New Task</Button>
      </RouterLink>
    </HStack>
  );
}

export default TaskListHeader;
