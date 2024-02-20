import { useEffect,useState } from "react";

function User(){
    const[count,setcount]=useState(0)
    const[data,setdata]=useState(5)

    useEffect(()=>{
        console.log("useeffect")
    })
    return(
        <div>
            <h1>useEffect in React{data}</h1>
            <h1>useEffect in React{count}</h1>
            <button onClick={()=>setcount(count+1)}>updatecount</button>
            <button onClick={()=>setdata(data+1)}>updatecount</button>
        </div>
    )
}
export default User;