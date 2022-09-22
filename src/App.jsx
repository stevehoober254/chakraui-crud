import { useState, useEffect } from "react";
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {

  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodos = (id) => {
    const newT = todos.filter((todo) => todo.id !== id);
    setTodos(newT);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTask = (completed) => {
    setTodos([...completed]);
  }
  return (
    <VStack p={4} spacing={70}>
      <IconButton
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        m={'24px'}
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        My Todo List Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodos} completeTask={completeTask} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
