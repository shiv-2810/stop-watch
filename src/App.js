import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [checkRunning, setCheckRunning] = useState(false)
  const[time, setTime] = useState(0)
  const[hours, setHours] = useState(0)
  const[minutes, setMinutes] = useState(0)
  const[seconds, setSeconds] = useState(0)
  const[milliSecs, setMilliSecs] = useState(0)

  useEffect(()=>{
    let intervalId;
    if(checkRunning){
      intervalId= setInterval(()=>setTime(time+1),10)
    }
    setHours(Math.floor(time / 360000))
    setMinutes(Math.floor((time % 360000) / 6000))
    setSeconds(Math.floor((time % 6000) / 100))
    setMilliSecs(time % 100)
    return () => clearInterval(intervalId);
   
  },[checkRunning, time])


  return (
    <div className="App">
      <header className="App-header">
        <div style={{color:'black',marginBottom:10}}>Stop watch</div>
        <div className='stop-box' style={{padding:30, display:'flex'}}>
        {hours}:{minutes}:{seconds}:{milliSecs}
        </div>
        <div style={{display:'flex',gap:'20px',marginTop:'20px'}}>
       <div className='start-btn' style={{cursor:'pointer'}} onClick={()=>setCheckRunning(!checkRunning)}>{`${checkRunning ? 'Pause' : 'Start'}`}</div>
       <div className='reset-btn' style={{cursor:'pointer'}} onClick={()=>{setCheckRunning(false); setTime(0)}}>Reset</div>
       </div>
      </header>
    </div>
  );
}

export default App;
