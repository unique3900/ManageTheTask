import React from 'react'
import { TaskModel } from '../model'

type Props = {
    tasks: TaskModel[];
    setTasks:React.Dispatch<React.SetStateAction<TaskModel[]>>
}
const DisplayList:React.FC = ({tasks,setTasks}:Props) => {
  return (
    <div>
          {
              tasks?.map((item) => (
                  <li>{item.title}</li>
              ))
      }
    </div>
  )
}

export default DisplayList
