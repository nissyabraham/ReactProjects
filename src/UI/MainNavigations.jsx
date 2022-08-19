import React from 'react'
import {Link} from 'react-router-dom'
import './MainNavigation.css'
export const MainNavigations = () => {
  return (
    <div>
        <ul className='heading'>
            <li>
                <Link to="/">AllTasks</Link>
            </li>
            <li>
            <Link to="add-tasks">AddTasks</Link>
            </li>
        </ul>
    </div>
  )
}
