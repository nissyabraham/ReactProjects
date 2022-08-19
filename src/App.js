import logo from './logo.svg';
import './App.css';
import {AllTasks} from './pages/AllTasks'
import {AddTasks} from './pages/AddTasks'
import {Layout} from './UI/Layout'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const dummy_data=[{
    "id":1,
    "title":"Task1",
    "due":"2022-07-30",
    "parent_task":null
  },
{
  "id":2,
  "title":"Task2",
  "due":"2022-07-27",
  "parent_task":null
}
]
  let [tasks,setTask]=useState(dummy_data)
let addtask=(task)=>{
  // let obj={...task,id:tasks.length+1}
  //  setTask([...tasks,{...task,id:tasks.length+1}])
   //console.log(tasks)
  // body:JSON.stringify(task)
  fetch("https://mytask-38683-default-rtdb.firebaseio.com/addtask.json",{
    method:"POST",
     body:JSON.stringify(task),
    headers:{
      "Content-Type":"application/json"
    }
  }).then((resp)=>console.log("success")).catch(err=>console.log(err))
}
  return (<div>
    <Layout>
      <Routes>
        <Route path='/' element={<AllTasks tasks={tasks} />}></Route>
        <Route path='add-tasks' element={<AddTasks addtask={addtask}/>}></Route>
     {/* <AllTasks tasks={tasks}/> 
     <NewTasks/>  */}
    </Routes>
    </Layout>
    </div>
  );
}

export default App;
