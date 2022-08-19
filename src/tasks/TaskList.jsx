import React from 'react'
import { TaskItem } from './TaskItem'

export const TaskList = ({task}) => {
  return (
    <div>
        {task.map(taskk=><TaskItem item={taskk} key={taskk.id}/>)}
    
    </div>
  )
}
