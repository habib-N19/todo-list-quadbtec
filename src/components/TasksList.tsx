'use client'
import { useAppSelector } from '@/redux/hooks'
import React from 'react'

export default function TasksList() {
    const tasks = useAppSelector(state => state.todo)
    console.log(tasks)
    return (
        <div>
            {
                tasks.todos.map(task => {
                    return <div key={task.id}>{task.task}</div>
                })
            }
        </div>
    )
}
