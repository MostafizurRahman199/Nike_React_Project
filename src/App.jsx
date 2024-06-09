import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <nav>
      <div className='logo'>
      <img src="/brand_logo.png" alt="Nike logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button>Login</button>
    </nav>
   </div>
  )
}

export default App
