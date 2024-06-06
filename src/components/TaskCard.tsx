'use client'
import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { DeleteIcon, Edit, PlayCircleIcon, UserRoundMinusIcon } from 'lucide-react';
import { TTaskCardProps } from '@/types';
import { Badge } from './ui/badge';
import { EnvelopeClosedIcon, ResetIcon } from '@radix-ui/react-icons';
import EditTask from './EditTask';

export default function TaskCard({ task, handleMarkRunning, handleEdit, handleDelete, handleMarkAsDone, handleDefault }: TTaskCardProps) {


    return (
        <Card className='p-2'>
            <CardTitle className='text-right'>
                <Badge variant={task.running ? 'secondary' : task.completed ? 'outline' : 'default'}>
                    {task.running ? 'Running' : task.completed ? 'Done' : 'Pending'}
                </Badge>
            </CardTitle>
            <CardContent>{task.task}</CardContent>
            <CardFooter className='flex justify-between items-center gap-2'>
                {
                    task.running || task.completed ? <Button title='Reset' onClick={() => {
                        handleDefault?.(task.id)
                        console.log(task)
                    }
                    } variant='outline'><ResetIcon /></Button> : null
                }
                {
                    !task.running && !task.completed ? <Button title='Mark as running' onClick={() => handleMarkRunning?.(task.id)} variant='outline'><PlayCircleIcon /></Button> : null
                }
                {
                    !task.completed ? <Button title='Mark as Done' onClick={() => handleMarkAsDone?.(task.id)} variant='outline'><EnvelopeClosedIcon /></Button> : null
                }
                {/* <Button title='Edit task' onClick={() => handleEdit(task)} variant='outline'></Button> */}
                <EditTask task={task} handleEdit={handleEdit} />
                <Button title='Delete Task' onClick={() => handleDelete(task.id)} variant='destructive'><DeleteIcon /></Button>
            </CardFooter>

        </Card >
    )
}
