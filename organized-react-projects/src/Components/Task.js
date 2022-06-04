
import React, {useState, useEffect} from 'react'


function Task({task, key}) {
// set task state
    const [done, setDone] = useState(false)
    // persist task state
    useEffect(()=> {
        setDone(JSON.parse(window.localStorage.getItem('done')));
    }, [])
        
    
  
       function changeStateDone(){
        setDone((done)=> !done);
       } 
  return (
    <div>
        <ol> {task.task}</ol>
        <button className="btn" onClick={changeStateDone}> {done? "Completed Task, great work" : "To Do"} </button>

    </div>
  )
}

export default Task