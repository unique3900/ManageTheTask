import React from 'react'
import {
    TaskModel
} from '../model'
import {
    AiFillEdit,
    AiFillDelete
} from 'react-icons/ai'
import {
    TiTick
} from 'react-icons/ti'
interface Props {
    task: TaskModel;
    tasks: TaskModel[];
    setTasks: React.Dispatch < React.SetStateAction < TaskModel[] >>
}
const SingleList: React.FC = ({
    tasks,
    setTasks,
    task
} : Props) => {

    const handleDelete = (id : number) => {
        setTasks(tasks.filter((item) => item.id != id))
    }
    const handleDone = (id : number) => {
        setTasks(tasks.map((task) => task.id == id ? {
            ...task,
            status: !task.status
        } : task))
    }
    return (
        <div className='shadow-md w-1/3 px-3 py-5 bg-yellow-500 text-black flex flex-row gap-3 justify-between items-center'>
            <div className="">
                <p className={
                    task.status ? "font-bold text-xl line-through" : "font-bold text-xl"
                }>
                    {
                    task.title
                }</p>
            </div>

            <div className="flex flex-row gap-4">

                {
                !task.status && (
                    <AiFillEdit className="scale-125 cursor-pointer"/>
                )
            }

                <AiFillDelete onClick={
                        () => {
                            handleDelete(task.id)
                        }
                    }
                    className="scale-125 cursor-pointer"/>
                <TiTick onClick={
                        () => {
                            handleDone(task.id)
                        }
                    }
                    className="scale-150 cursor-pointer"/>
            </div>
    </div>
    )
}

export default SingleList
