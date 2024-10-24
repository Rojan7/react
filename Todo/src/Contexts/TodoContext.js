import { createContext, useContext } from "react";
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "message",
      completed: false,
    },
  ],
  addTodo : (todo)=>{},
  updatedToDo : (id,todo)=>{},
  deleteToDo : (id) =>{},
  toggleComplete : (id) => {}

});
export const useTodo =()=>{
    return useContext (TodoContext)
}
export const TodoProvider = TodoContext.Provider
