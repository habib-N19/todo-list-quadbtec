'use client'
import { TTasksComponentProps } from '@/types'
import React from 'react'
import TaskCard from './TaskCard'

export default function RunningTasksTasksList({ tasks, handleMarkRunning, handleEdit, handleDelete, handleMarkAsDone, }: TTasksComponentProps) {
    return (
        <div>
            {
                tasks.map(task => task.running && <TaskCard key={task.id} task={task} handleEdit={handleEdit} handleMarkRunning={handleMarkRunning} handleMarkAsDone={handleMarkAsDone} handleDelete={handleDelete} />)
            }
        </div>
    )
}
