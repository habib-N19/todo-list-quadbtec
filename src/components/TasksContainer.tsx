'use client'
import React from 'react'
import TaskInput from './TaskInput'
import TasksList from './TasksList'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { editTodo, makeDefault, markAsDone, markAsRunning, removeToDo } from '@/redux/features/to-do/todoSlice'
import RunningTasks from './RunningTasks'
import CompletedTasks from './CompletedTasks'

export default function TasksContainer() {
    const dispatch = useAppDispatch()
    const tasks = useAppSelector(state => state.todo)

    const handleDefault = (id: string) => {
        console.log(id);
        dispatch(makeDefault(id))
    }
    const handleEdit = (data: any) => {
        console.log(data);
        dispatch(editTodo({
            id: data.id,
            task: data.task
        }))

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
                <RunningTasks tasks={tasks.todos} handleEdit={handleEdit}
                    handleMarkAsDone={handleMarkAsDone} handleDelete={handleDelete}
                    handleDefault={handleDefault}
                />


            </div>
            {/* Done */}
            <div className='border-r-2 pr-1 col-span-1 space-y-2'>
                <h1 className='text-center py-3 text-xl font-bold'>Done</h1>
                <CompletedTasks tasks={tasks.todos} handleEdit={handleEdit} handleMarkRunning={handleMarkRunning}
                    handleDelete={handleDelete} handleDefault={handleDefault}
                />


            </div>


        </div>
    )
}
