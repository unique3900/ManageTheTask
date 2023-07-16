import React from 'react'
import { TaskModel } from '../model'
import SingleList from './SingleList';

type Props = {
  task: TaskModel;
    tasks: TaskModel[];
    setTasks:React.Dispatch<React.SetStateAction<TaskModel[]>>
}
const DisplayList:React.FC = ({tasks,setTasks}:Props) => {
  return (
    <div className='flex flex-row flex-wrap gap-3'>
          {
              tasks?.map((item) => (
                  <SingleList key={item.id} task={item}  tasks={tasks} setTasks={setTasks} />
              ))
      }
    </div>
  )
}

export default DisplayList
