'use client'
import React from 'react'
import { Card, CardFooter, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { CheckCheckIcon, DeleteIcon, Edit, PlayCircleIcon } from 'lucide-react';
import { TTaskCardProps } from '@/types';

export default function TaskCard({ task, handleMarkRunning, handleEdit, handleDelete, handleMarkAsDone, }: TTaskCardProps) {
    return (
        <Card className='p-2'>
            <CardTitle>{task.task}</CardTitle>
            <CardFooter className='flex justify-between items-center gap-2'>
                <Button onClick={() => handleMarkRunning(task.id)} variant='outline'><PlayCircleIcon /></Button>
                <Button onClick={() => handleEdit(task.id)} variant='outline'><Edit></Edit></Button>
                <Button onClick={() => handleMarkAsDone(task.id)} variant='secondary'><CheckCheckIcon /></Button>
                <Button onClick={() => handleDelete(task.id)} variant='destructive'><DeleteIcon /></Button>
            </CardFooter>

        </Card >
    )
}
