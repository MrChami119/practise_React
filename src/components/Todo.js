import React from 'react'



export const Todo = ({task,toggleComplete}) => {
    return (
        <div className='Todo'>
            <p>{task.task}</p>
        </div>
    )
}