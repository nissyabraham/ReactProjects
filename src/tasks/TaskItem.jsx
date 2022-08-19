import React from 'react'
import { Card } from '../UI/Card'
import './TaskItem.css'
import {Link} from 'react-router-dom'

export const TaskItem = ({item}) => {
  return (
    <div>
         <Card> 
           <div class="container">
            <div class="row"> 
            
              {/* <div class="col">
        <h1>{item.id}</h1></div> */}
         <div class="col">  
        <h2>{item.title}
        {/* <ui><li><Link to="add-tasks">AddchildTask</Link></li></ui> */}
        </h2>
         </div> 
        
        <div class="col">
        <h3>{item.due}</h3>
        </div>
        <div class="col">{item.parent_tasks}</div>
        <div >
        <li><Link to="add-tasks">AddchildTask</Link></li>
        </div>
         </div> 
        
          </div>  
        </Card> 

    </div>
  )
}
