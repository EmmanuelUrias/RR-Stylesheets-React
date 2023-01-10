import './App.css';
import Clock from './Components/Clock';
import WelcomeMsg from './Components/WelcomeMsg';
import UserMsg from './Components/UserMsg';
import { useState, useEffect } from 'react'

function App() {
  const [timeString, setTimeString] = useState('')

      function updateTime() {
       let currentTime = new Date();
        let hours = currentTime.getHours().toString().padStart(2, "0");
        let minutes = currentTime.getMinutes().toString().padStart(2, "0");
        let seconds = currentTime.getSeconds().toString().padStart(2, "0");

        // Format the time as a string
        setTimeString(`${hours}:${minutes}:${seconds}`)          
      }

      useEffect(() => {
        setInterval(updateTime, 1000)
      })

  return (
    <div className="App">
      <WelcomeMsg />
      <Clock time={timeString}/>
      <UserMsg />
    </div>
  );
}

export default App;
