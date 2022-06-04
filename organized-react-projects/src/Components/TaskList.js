import React, {useEffect, useState} from 'react'
import Task from './Task'


export default function TaskList(){
    const [tasks, setTasks] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/tasks')
          .then(r=>r.json())
          .then(setTasks)
        },[])
        const taskArray= tasks.map((task, index)=> <Task task={task} key={task[index]}/>)
    return(
        <div>{taskArray}</div>
    )

}