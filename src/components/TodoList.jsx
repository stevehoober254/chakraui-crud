import React, { useState, useEffect} from "react";
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Badge,
  Spacer,
  Checkbox,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

export default function TodoList({todos, deleteTodo, completeTask }) {

  const handleTask = (todo) => {
    todo.completed = !todo.completed;
    completeTask(todos);
  };

  if (todos.length == 0) {
    return (
      <HStack>
        <Badge colorScheme={"green"} p={"4"} m={"50"} borderRadius={"lg"}>
          No todos left!
        </Badge>
      </HStack>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      mt={"50"}
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo, index) => (
        <HStack key={todo.id}>
          <Checkbox
            colorScheme={"green"}
            type="checkbox"
            defaultChecked={todo.completed}
            marginRight={"4"}
            onChange={() => handleTask(todo)}
          />
          <Text>{index + 1}. </Text>
          <Text>{todo.name}</Text>
          {todo.completed ?
            <Badge
              variant={"outline"}
              colorScheme="green"
              borderRadius={"2xl"}
              fontSize={'2xs'}
              p={'1'}
            >
              Completed
            </Badge>
          : ''}
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
            color={"red"}
          />
        </HStack>
      ))}
      <Text color={"blue.500"}>Total : {todos.length} Tasks</Text>
    </VStack>
  );
}
