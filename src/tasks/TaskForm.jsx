import React from 'react'
import { useRef } from 'react'
import { Card } from '../UI/Card'
import './Taskform.css'
export const TaskForm = ({addtask}) => {
    const titleRef=useRef("")
    const dueRef=useRef("")
    const parentRef=useRef("")
    const addBtnHandler=(event)=>{
        event.preventDefault()
    const title=titleRef.current.value
    const due=dueRef.current.value
    const parent=parentRef.current.value
    console.log(title)
    console.log(due)
    console.log(parent)
    addtask({"title":title,"due":due,"parent":parent})
    }
  return (
    <Card>
        <form action="">
            <div>
                <label >Title</label>
                <input type="text" ref={titleRef} placeholder="enter the title"/>
                
            </div>
            <br/>
            <div>
                <label >Due</label>
                <input type="date" placeholder="YYYY-MM-DD"  ref={dueRef}  />
            </div>
            <br/>
            <div>
            <label >parentTask</label>
                <input type="text"  ref={parentRef}/>
            </div>
            <br/>
            <button className="btn btn-primary"onClick={addBtnHandler}>post</button>
            <br/>
        </form>
    </Card>
  )
}
