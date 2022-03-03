import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { getAll } from './services/employeeService';

function App() {
  const [count, setCount] = useState(0);
  const getEmployye=()=>{
    getAll()
    .then((employee)=>console.log(employee))
    .catch((err)=>console.log(err))
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button onClick={getEmployye}>click</button>
        </p>  
      </header>
    </div>
  )
}

export default App
