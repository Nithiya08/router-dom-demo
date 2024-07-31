import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function Layout(){
return(<>
<Header></Header>
<Outlet></Outlet><br></br>
{/* outlet is the component which tells ,where the child component will loaded */}

<Footer></Footer>
</>)

}
export default Layout