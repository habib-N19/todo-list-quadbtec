'use client'
import React from 'react'
import { Card, CardFooter, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { TTodo } from '@/redux/features/to-do/todoSlice';
type TTaskCardProps = {
    task: TTodo;
    handleEdit: (id: string) => void;
    handleDelete: (id: string) => void;
    handleMarkAsDone: (id: string) => void;
};
export default function TaskCard({ task, handleEdit, handleDelete, handleMarkAsDone, }: TTaskCardProps) {
    return (
        <Card className='p-2'>
            <CardTitle>{task.task}</CardTitle>
            <CardFooter className='flex justify-between items-center gap-2'>
                <Button onClick={() => handleEdit(task.id)} variant='outline'>Edit</Button>
                <Button onClick={() => handleMarkAsDone(task.id)} variant='secondary'>Mark as done</Button>
                <Button onClick={() => handleDelete(task.id)} variant='destructive'>Delete</Button>
            </CardFooter>

        </Card>
    )
}
