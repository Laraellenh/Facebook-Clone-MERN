import React, {useEffect, useState} from 'react'

 export default function Hooks(){
const [hooks, setHooks] = useState([])
  
 

    useEffect(()=>{
      fetch ("http://localhost:3000/hooks") 
      .then(r=>r.json())
      .then(setHooks)
   }, [])

   return(
       <div></div>
   )
}