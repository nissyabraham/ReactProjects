import React,{useEffect,useState} from 'react'
import {TaskList} from '../tasks/TaskList'
import '../tasks/Taskform.css'

export const AllTasks = () => {
   let [tasks,setTask]=useState([])
   const [loading,setLoading]=useState(true)
   useEffect(()=>{
     fetch("https://mytask-38683-default-rtdb.firebaseio.com/addtask.json")
  .then(x=>x.json()).then(data=>{
    let tasks_data=[]
    Object.keys(data).forEach(key=>{
      let obj={
                 id:key,
                 ...data[key]
              }
              tasks_data.push(obj)
    });
    setTask(tasks_data)
   setLoading(false)
  })
  //     let tasks_data=[]
  //     Object.keys(data).forEach(key=>{
  //       let obj={
  //         id:key,
  //         ...data[key]
  //       }
  //       tasks_data.push(obj)
  //     })
  //   })
  //   setTask(tasks_data)
  //   setLoading(false)

  //   // setTask(data);console.log(data)})
   },[])
  if(loading){
     return(<p>loading...</p>)
   }
  
  return (
    <div>
      <h1>my Tasks</h1>
      
        <div class="container"> 

         <div class="row"> 
           <div class="col-3"> 
        <h1 class="text-left">TaskTitle</h1>
           </div> 
           <div class="col-3"> 
            <h1>Due</h1> 
           </div>   

          </div>  
         
       </div> 
          <TaskList task={tasks}/>  
    </div>

  )
}
