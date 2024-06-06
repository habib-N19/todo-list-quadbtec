'use client'
import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { CheckCheckIcon, DeleteIcon, Edit, PlayCircleIcon } from 'lucide-react';
import { TTaskCardProps } from '@/types';
import { Badge } from './ui/badge';

export default function TaskCard({ task, handleMarkRunning, handleEdit, handleDelete, handleMarkAsDone, }: TTaskCardProps) {
    return (
        <Card className='p-2'>
            <CardTitle className='text-right'>
                <Badge variant={task.running ? 'secondary' : task.completed ? 'outline' : 'default'}>
                    {task.running ? 'Running' : task.completed ? 'Done' : 'Pending'}
                </Badge>
            </CardTitle>
            <CardContent>{task.task}</CardContent>
            <CardFooter className='flex justify-between items-center gap-2'>
                <Button onClick={() => handleMarkRunning(task.id)} variant='outline'><PlayCircleIcon /></Button>
                <Button onClick={() => handleEdit(task.id)} variant='outline'><Edit></Edit></Button>
                <Button onClick={() => handleMarkAsDone(task.id)} variant='secondary'><CheckCheckIcon /></Button>
                <Button onClick={() => handleDelete(task.id)} variant='destructive'><DeleteIcon /></Button>
            </CardFooter>

        </Card >
    )
}
