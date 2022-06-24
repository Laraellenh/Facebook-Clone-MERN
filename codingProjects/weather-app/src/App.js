
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
const [weatherdata, setWeatherData]= useState([])
  useEffect(()=>{
    fetch('api.openweathermap.org/data/2.5/weather?q=NewYork&usAPPID=fa96698f9e50f3dbe72053a45b877f3a&units=imperial')
    .then(r=>r.json())
    .then(console.log(weatherdata))
  }, [])

  return (
    <div >
      
    </div>
  );
}

export default App;
