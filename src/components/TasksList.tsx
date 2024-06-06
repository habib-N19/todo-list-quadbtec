'use client'
import React from 'react'
import TaskCard from './TaskCard'
import { TTasksComponentProps } from '@/types'

export default function TasksList({ tasks, handleMarkRunning, handleEdit, handleDelete, handleMarkAsDone }: TTasksComponentProps) {

    return (
        <div>
            {
                tasks.map(task => (!task.running && !task.completed) && <TaskCard key={task.id} task={task} handleEdit={handleEdit} handleMarkRunning={handleMarkRunning} handleMarkAsDone={handleMarkAsDone} handleDelete={handleDelete}
                 
                />)
            }
        </div>
    )
}
