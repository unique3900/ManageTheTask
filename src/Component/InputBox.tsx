import React from 'react'

interface Props{
  task: string;
  addTask: (e: React.FormEvent) => void; //function that returns nothing
  setTask:React.Dispatch<React.SetStateAction<string>>;
}
const InputBox: React.FC = ({ task, setTask,addTask }: Props) => {

  return (
    <form onSubmit={(e: React.FormEvent) => {
      addTask(e)
    }}  className='w-full flex flex-row justify-between items-center mt-4 gap-3'>
          <input type="text" className='w-full px-3 py-2 rounded-full' value={task} onChange={(e) => {
              setTask(e.target.value);

      }} placeholder='Enter Task Here....' />
      <button className="bg-green-600 text-white rounded-full p-3">Add</button>
    </form>
  )
}

export default InputBox
