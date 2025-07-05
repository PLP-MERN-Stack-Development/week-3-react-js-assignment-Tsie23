// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React + Kebaabetswe</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState } from "react";
import Task from "./components/Task";
import TaskForm from "./components/TaskForm";

export default function App(){
  const [tasks, setTasks] = useState([
  { id: 1, title: "Write Lessom Plan", completed: false },
  { id: 2, title: "Submit Week 3 Assignment", completed: true }
  ]);

  const toggleTask = id => {
    setTasks(curr => curr.map (t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl fint-bold mb-4">Task Dashboard</h1>
      {tasks.map(task => (
        <Task key={task.id} {...task} onToggle={toggleTask} />
      ))
      }  
    </div>
  )

}