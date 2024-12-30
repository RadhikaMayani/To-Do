import { useState, useId, useContext } from "react"
import { ToDoContext } from "./context/ToDoContext"
import ToDoForm from "./components/ToDoForm.jsx"
import ToDoItem from "./components/ToDoItem.jsx"

function App() {
  const { todos } = useContext(ToDoContext)

  return (
    <>
      <h1 className='flex justify-center border m-3 p-4 rounded-sm font-bold text-2xl'>To-do app</h1>
      <div className="todo-form flex w-full justify-center">
        <ToDoForm />
      </div>
      <div className="flex gap-y-3 flex-col">
        {todos.map((todo) => (
          <div key={todo.id} className="w-full justify-center flex">
            <ToDoItem todo={todo} />
          </div>
        ))}
      </div>

    </>
  )
}

export default App
