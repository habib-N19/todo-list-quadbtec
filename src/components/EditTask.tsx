'use client'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Edit } from 'lucide-react'
import { TTodo } from '@/types'

export default function EditTask({ task, handleEdit }: { task: TTodo, handleEdit: any }) {
    const [editTask, setEditTask] = useState(task.task)
    const handleEditTask = () => {

        handleEdit({ id: task.id, task: editTask })


    }
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline"><Edit></Edit></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Task : {task.task}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Input
                            id="name"
                            defaultValue={task.task}
                            className="col-span-3"
                            onChange={(e) => setEditTask(e.target.value)}

                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogTrigger>

                        <Button onClick={handleEditTask} variant='outline' type="submit"> Edit Task</Button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
