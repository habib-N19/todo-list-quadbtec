import React from 'react'
import TaskCard from '../TaskCard'
import TaskInput from '../TaskInput'

export default function TasksContainer() {
    return (
        <div className='space-x-2 container grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto p-2 md:p-4 items-center justify-center'>

            {/* add task */}
            <div className="col-span-3">
                <TaskInput />
            </div>
            {/* TODO */}
            <div className='border-r-2 pr-1 col-span-1 space-y-2'>
                <h1 className='text-center py-3 text-xl font-bold'>Currently Working</h1>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
            </div>
            {/* Working */}
            <div className='border-r-2 pr-1 col-span-1 space-y-2'>
                <h1 className='text-center py-3 text-xl font-bold'>Tasks Pending</h1>

                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
            </div>
            {/* Done */}
            <div className='border-r-2 pr-1 col-span-1 space-y-2'>
                <h1 className='text-center py-3 text-xl font-bold'>Done</h1>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>
                <TaskCard></TaskCard>

            </div>


        </div>
    )
}
