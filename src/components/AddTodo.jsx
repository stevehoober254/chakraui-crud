import React, { useState} from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import { nanoid } from 'nanoid';

export default function AddTodo({ addTodo }) {
  const [todoName, setTodoName] = useState("");
  const toast = useToast();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(todoName.length === 0){
      toast({
        title: "Todo must have a title",
        status: "error",
        duration: "1000",
        isClosable: true,
        position:'top-right'
      });
      return;
    }
    let todo = {
      id: nanoid(),
      name: todoName,
      completed: false
    };
    console.log(todo);
    addTodo(todo);
    setTodoName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack md={"4"}>
        <Input variant={"filled"} placeholder="Chakra-UI Crud" value={todoName} onChange={(e) => setTodoName(e.target.value)} />
        <Button colorScheme={"pink"} px={"8"} type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}
