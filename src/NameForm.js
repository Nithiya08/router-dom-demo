import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NameForm(){
    let [name,setname]=useState()
    let navigate =useNavigate()
    const handle=()=>{
        //navigate to the path '/greet/:name
        //to pass data in  the url
        navigate(`/greet/${name}`)
    }
    return(<>
    <b>Enter the Name</b>
    <input type="text" value={name} onChange={(e)=>setname(e.target.value)}></input><br></br>
    <button onClick={handle}>Submit</button>
    </>)
}
export default NameForm