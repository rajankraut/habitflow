import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { DashBoard } from './pages/DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1 className='font-bold text-4xl'> hey iam app js</h1>
       <DashBoard />
      </div>
     
    </>
  )
}

export default App
