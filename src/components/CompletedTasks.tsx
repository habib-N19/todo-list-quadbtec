'use client'
import { TTasksComponentProps } from '@/types'
import React from 'react'
import TaskCard from './TaskCard'

export default function CompletedTasksTasksList({ tasks, handleMarkRunning, handleEdit, handleDelete, handleMarkAsDone, handleDefault }: TTasksComponentProps) {
    return (
        <div>
            {
                tasks.map(task => task.completed && <TaskCard key={task.id} task={task} handleEdit={handleEdit} handleMarkRunning={handleMarkRunning} handleMarkAsDone={handleMarkAsDone} handleDelete={handleDelete} handleDefault={handleDefault} />)
            }
        </div>
    )
}
