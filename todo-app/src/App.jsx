import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:5001/todos");
    const data = await response.json();
    setTodos(data)
  }

  const createTodo = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({todo})
    });
    setTodo("")
    fetchTodos();
  }

  return <div className="App">
    <h1>Todos</h1>
    <form action="" onSubmit={createTodo}>
      <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
    </form>
    {todos.map((t) => (
    <div key={t.id}>{t.title}</div>))}</div>

  }
export default App
