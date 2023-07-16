import React, { useState } from 'react'
import InputBox from './Component/InputBox'
import { TaskModel } from './model';
import DisplayList from './Component/DisplayList';

const App:React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks,setTasks]=useState<TaskModel[]>([])
  
  
  const addTask = (e:React.FormEvent) => {
    e.preventDefault()
    if (tasks) {
      setTasks([...tasks,{id:Date.now(),title:task,status:false}])
      setTask("");
      console.log(tasks)
    }
  }
  return (

    <div className='h-screen flex flex-col bg-purple-400'>
      <h1 className='font-bold text-center text-6xl text-white'>TaskKeeper</h1>
      <InputBox addTask={addTask} task={ task} setTask={setTask}  />
      <DisplayList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
