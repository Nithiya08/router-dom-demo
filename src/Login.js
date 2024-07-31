import { useNavigate } from "react-router-dom"

function Login(){
    let navigate=useNavigate()
//how to navigate the one component to another component
    const handleChange=(e)=>{
        e.preventDefault()
         navigate('/home')//navigate the user to home page
    }
    return(<>
    <form onSubmit={handleChange}>
        <label htmlFor="email" >Enter Email</label>
        <input type="email"></input><br></br>

        <label htmlFor="pwd" >password</label>
        <input type="password"></input><br></br>
        <input type="submit" value="submit"></input>
    </form>
    </>)
}
export default Login