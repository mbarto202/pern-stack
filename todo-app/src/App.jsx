import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:5001/todos");
    const data = await response.json();
    setTodos(data)
  }

  return <div className="App">
    <h1>Todos</h1>
    {todos.map((t) => (
    <div key={t.id}>{t.title}</div>))}</div>

  }
export default App
