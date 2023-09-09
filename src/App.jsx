import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  return (
    <div className='w-full h-screen duration-200' style={{
      backgroundColor: color
    }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white rounded px-2 py-2'>
          <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>green
          </button>
          <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}>blue
          </button>
          <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>red
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
