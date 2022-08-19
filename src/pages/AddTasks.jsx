import React from 'react'
import { TaskForm } from '../tasks/TaskForm'

export const AddTasks = ({addtask}) => {
  return (
    <div>
        <TaskForm addtask={addtask}/>
        </div>
  )
}
