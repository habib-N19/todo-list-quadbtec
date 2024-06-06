'use client'
import React from 'react'
import TaskCard from './TaskCard'
import TaskInput from './TaskInput'
import TasksList from './TasksList'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { editTodo, markAsDone, markAsRunning, removeToDo } from '@/redux/features/to-do/todoSlice'

export default function TasksContainer() {
    const dispatch = useAppDispatch()
    const tasks = useAppSelector(state => state.todo)
    const handleEdit = (data: any) => {
        console.log(data);
    }
    const handleMarkRunning = (id: string) => {
        dispatch(markAsRunning(id))
    }
    const handleMarkAsDone = (id: string) => {
        dispatch(markAsDone(id))
    }
    const handleDelete = (id: string) => {
        dispatch(removeToDo(id))
    }
    return (
        <div className='space-x-2 container grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto p-2 md:p-4 items-center justify-center'>

            {/* add task */}
            <div className="col-span-3">
                <TaskInput />
            </div>
            {/* TODO */}
            <div className='border-r-2 pr-1 col-span-1 space-y-2'>
                <h1 className='text-center py-3 text-xl font-bold'>Tasks List</h1>
                <TasksList tasks={tasks.todos} handleEdit={handleEdit} handleMarkRunning={handleMarkRunning}
                    handleMarkAsDone={handleMarkAsDone} handleDelete={handleDelete}
                />
            </div>
            {/* Working */}
            <div className='border-r-2 pr-1 col-span-1 space-y-2'>
                <h1 className='text-center py-3 text-xl font-bold'>Tasks Running</h1>


            </div>
            {/* Done */}
            <div className='border-r-2 pr-1 col-span-1 space-y-2'>
                <h1 className='text-center py-3 text-xl font-bold'>Done</h1>


            </div>


        </div>
    )
}
