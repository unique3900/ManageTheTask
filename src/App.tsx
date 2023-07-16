import React, { useState } from 'react'
import InputBox from './Component/InputBox'

const App:React.FC = () => {
  const [task, setTask] = useState<string>("");
  console.log(task)
  return (

    <div className='h-screen flex flex-col bg-purple-400'>
      <h1 className='font-bold text-center text-6xl text-white'>TaskKeeper</h1>
      <InputBox task={ task} setTask={setTask} />
    </div>
  )
}

export default App
