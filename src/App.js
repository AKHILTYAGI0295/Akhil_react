import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import User from './User';
function App() {
  const[count,setcount]=useState(0)
  useEffect(()=>{
    console.log("work")
  })
  return (
    <div className="App">
      <h1>useEffect in React {count} </h1>
      <button onClick={()=>setcount(count+1)}>update count</button>
    <User/>
    </div>
  );
}

export default App;
